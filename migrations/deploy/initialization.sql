-- Deploy oparc:initialization to pg

BEGIN;

CREATE TABLE "attraction" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "capacity" INT NOT NULL,
    "opening_hour" TIME WITH TIME ZONE NOT NULL,
    "closing_hour" TIME WITH TIME ZONE NOT NULL,
    "duration" INT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "visitor" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "tickets_number" INT NOT NULL,
    "validity_start" TIMESTAMPTZ NOT NULL,
    "validity_end" TIMESTAMPTZ NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "agent" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "last_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "incident" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "number" INT NOT NULL,
    "type" TEXT NOT NULL,
    "resolution_date" TIMESTAMPTZ,
    "agent_id" INT REFERENCES "agent"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "attraction_has_visitors" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "attraction_id" INT REFERENCES "attraction"("id"),
    "visitors_id" INT REFERENCES "visitor"("id"),
    "number_of_places" INT NOT NULL CHECK (number_of_places >= 1 AND number_of_places <= 3),
    "reservation_time" TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE "attraction_has_incidents" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "attraction_id" INT REFERENCES "attraction"("id"),
    "incident_id" INT REFERENCES "incident"("id"),
    "incident_date" TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMIT;
