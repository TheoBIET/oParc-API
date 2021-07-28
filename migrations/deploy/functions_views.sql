-- Deploy oparc:functions_views to pg

BEGIN;

CREATE OR REPLACE VIEW "attractions_with_status" AS 
SELECT
"attraction"."name",
"attraction"."capacity",
"attraction"."opening_hour",
"attraction"."closing_hour",
"attraction"."duration",
CASE 
  WHEN NOW()::TIME WITH TIME ZONE BETWEEN "attraction"."opening_hour" 
  AND "attraction"."closing_hour" AND ((SELECT COUNT(*) FROM "incident" WHERE attraction_id="attraction"."id" AND "resolution_date" IS NULL) = 0)
      THEN true
      ELSE false
  END 
AS "opened"
FROM "attraction";

CREATE OR REPLACE FUNCTION get_visitor_active_bookings(userID int) RETURNS table ("attraction" text, "ticket_no" int, "date" timestamptz) AS
$$
BEGIN
    RETURN QUERY SELECT 
    "attraction"."name",
    "visitor"."tickets_number",
    "attraction_has_visitors"."reservation_time"
    FROM "attraction_has_visitors"
    JOIN "attraction" ON "attraction"."id"="attraction_has_visitors"."attraction_id"
    JOIN "visitor" ON "visitor"."id"="attraction_has_visitors"."visitors_id"
    WHERE "visitors_id"=userID 
    AND "reservation_time" > now();
END;
$$ LANGUAGE 'plpgsql';

CREATE OR REPLACE FUNCTION add_booking(attractionID int, userID int, nbPlaces int, reservation_time timestamptz) RETURNS text AS
$$
BEGIN
    IF (SELECT COUNT(*) FROM get_visitor_active_bookings(userID)) < 3 THEN
      INSERT INTO "attraction_has_visitors" ("attraction_id", "visitors_id", "number_of_places", "reservation_time")
      VALUES (attractionID, userID, nbPlaces, reservation_time);
      RETURN 'Successfully booked';
    ELSE
        RETURN 'You can''t reserve more places for the moment';
    END IF;
END;
$$ LANGUAGE 'plpgsql';

COMMIT;
