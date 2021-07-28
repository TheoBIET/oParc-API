const client = require('../database');

module.exports = {
   
    getAll: async () => {
        const results = await client.query('SELECT * FROM "attractions_with_status"');
        return results.rows;
    }
    
}