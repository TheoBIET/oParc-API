require("dotenv").config();
const faker = require("faker");
const client = require("../app/database");

const attractions = [
    {
        name: "La Galère",
        capacity: 30,
        opening_hour: "08:00:00",
        closing_hour: "18:00:00",
        duration: "0-0 0 00:02:30",
    },
    {
        name: "Oziris",
        capacity: 26,
        opening_hour: "18:00:00",
        closing_hour: "07:00:00",
        duration: "0-0 0 00:02:13",
    },
    {
        name: "Tonerre de Zeus",
        capacity: 43,
        opening_hour: "03:00:00",
        closing_hour: "14:00:00",
        duration: "0-0 0 00:02:23",
    },
    {
        name: "La Trace du Hourra",
        capacity: 8,
        opening_hour: "01:00:00",
        closing_hour: "21:00:00",
        duration: "0-0 0 00:01:18",
    },
    {
        name: "Goudurix",
        capacity: 64,
        opening_hour: "08:00:00",
        closing_hour: "23:00:00",
        duration: "0-0 0 00:01:02",
    },
    {
        name: "Spectacle Random",
        capacity: 200,
        opening_hour: "10:00:00",
        closing_hour: "12:00:00",
        duration: "0-0 0 02:00:00",
    },
];

const insertAttractions = async () => {
    for (let i = 0; i < attractions.length; i++) {
        const attraction = {
            name: attractions[i].name,
            capacity: attractions[i].capacity,
            opening_hour: attractions[i].opening_hour,
            closing_hour: attractions[i].closing_hour,
            duration: attractions[i].duration,
        };

        await client.query(
            'INSERT INTO "attraction" ("name", "capacity", "opening_hour", "closing_hour", "duration") VALUES ($1, $2, $3, $4, $5)',
            [
                attraction.name,
                attraction.capacity,
                attraction.opening_hour,
                attraction.closing_hour,
                attraction.duration,
            ]
        );
    }
};

const insertAgents = async () => {
    for (let i = 0; i < 20; i++) {
        const agent = {
            last_name: faker.name.lastName(),
            first_name: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            created_at: faker.date.past(),
        };

        await client.query(
            'INSERT INTO "agent" ("last_name", "first_name", "email", "password", "created_at") VALUES ($1, $2, $3, $4, $5)',
            [
                agent.last_name,
                agent.first_name,
                agent.email,
                agent.password,
                agent.created_at,
            ]
        );
    }
    const now = new Date();
    await client.query(
        'INSERT INTO "agent" ("last_name", "first_name", "email", "password", "created_at") VALUES ($1, $2, $3, $4, $5)',
        [
            "Admin",
            "oParc",
            "admin@oparc.io",
            "$2b$10$vpxlXdEDGjLr0yMwsfGgyO.apK4UEHuhHFKsgTCjNSAVfF5MmbThC",
            now,
        ]
    );
};

const insertVisitor = async () => {
    for (let i = 0; i < 1000; i++) {
        const start = faker.date.past();

        const visitor = {
            tickets_number: i,
            validity_start: start,
            validity_end: faker.date.future(),
            created_at: start,
        };

        await client.query(
            'INSERT INTO "visitor" ("tickets_number", "validity_start", "validity_end", "created_at") VALUES ($1, $2, $3, $4)',
            [
                visitor.tickets_number,
                visitor.validity_start,
                visitor.validity_end,
                visitor.created_at,
            ]
        );
    }
};

const insertIncident = () => {};

const insertReservations = () => {};

const start = () => {
    insertAgents();
    insertAttractions();
    insertVisitor();
};

start();
