-- Verify oparc:initialization on pg

BEGIN;

SELECT id FROM "attraction" WHERE FALSE;
SELECT id FROM "visitor" WHERE FALSE;
SELECT id FROM "agent" WHERE FALSE;
SELECT id FROM "incident" WHERE FALSE;
SELECT id FROM "attraction_has_visitors" WHERE FALSE;
SELECT id FROM "attraction_has_incidents" WHERE FALSE;

ROLLBACK;
