const client = require('../database');

module.exports = {
   
    getAll: async () => {
        const results = await client.query('SELECT * FROM "attractions_with_status"');
        return results.rows;
    },

    verifyIfExists: async (id) => {
        const results = await client.query(`SELECT id FROM "attraction" WHERE "id"=$1`, [id]);
        return !!results.rows[0];
    }
    
}