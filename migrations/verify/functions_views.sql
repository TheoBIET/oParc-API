-- Verify oparc:functions_views on pg

BEGIN;

SELECT id FROM "attractions_with_status" WHERE false;
SELECT COUNT(*) FROM get_visitor_active_bookings(1);

ROLLBACK;
