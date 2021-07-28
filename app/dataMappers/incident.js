const client = require("../database");

module.exports = {
    getAll: async () => {
        const results = await client.query(`SELECT * FROM incident`);
        return results.rows;
    },

    findOne: async (id) => {
        const result = await client.query(
            `SELECT * FROM incident WHERE id=${id}`
        );
        return result.rows[0];
    },

    update: async (id, data) => {
        const result = await client.query(
            `UPDATE incident SET 
                type=$1,
                resolution_date=$2,
                agent_id=$3,
                updated_at=now()
            WHERE id=${id}
            RETURNING *`,
            [data.type, data.resolution_date, data.agent_id]
        );
        return result.rows[0];
    },
};
