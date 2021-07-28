const client = require('../database');

module.exports = {
   
    findOne: async (ticketNb) => {
        const results = await client.query('SELECT * FROM "visitor" WHERE "tickets_number" = $1', [ticketNb]);
        return results.rows[0];
    }
    
}