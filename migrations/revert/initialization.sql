-- Revert oparc:initialization from pg

BEGIN;

DROP TABLE "attraction", "visitor", "agent", "incident", "attraction_has_visitors" CASCADE;

COMMIT;
