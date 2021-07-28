const client = require("../database");

module.exports = {
    getAll: async () => {
        const results = await client.query(`SELECT * FROM incident`);
        return results.rows;
    },

    findOne: async (id) => {
        const results = await client.query(
            `SELECT * FROM incident WHERE id=$1`,
            [id]
        );
        return results.rows[0];
    },

    update: async (id, data) => {
        const results = await client.query(
            `UPDATE incident SET 
                type=$1,
                resolution_date=$2,
                agent_id=$3,
                updated_at=now()
            WHERE id=$4
            RETURNING *`,
            [data.type, data.resolution_date, data.agent_id,id]
        );
        return results.rows[0];
    },
    
    create : async (data) => {
        const now = new Date();
        console.log(now)
        const results = await client.query (
            `INSERT INTO "incident" ("number", "type", "attraction_id", "created_at") VALUES ($1, $2, $3, now()) RETURNING *;`,
            [data.number, data.type,data.attraction_id]
        );
        return results.rows[0]
    },

    findByNumber: async (number) => {
        const results = await client.query(
            `SELECT * FROM incident WHERE number=$1;`,
            [number]
        );
        return results.rows[0];
    },
};
