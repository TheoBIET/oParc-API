-- Revert oparc:functions_views from pg

BEGIN;

DROP FUNCTION add_booking;
DROP FUNCTION get_visitor_active_bookings;
DROP VIEW attractions_with_status;

COMMIT;
