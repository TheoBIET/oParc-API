const client = require('../database');

module.exports = {
   
    findOne: async (ticketNb) => {
        const results = await client.query('SELECT * FROM "visitor" WHERE "tickets_number" = $1', [ticketNb]);
        return results.rows[0];
    },

    getBookings: async (userID) => {
        const results = await client.query('SELECT * FROM get_visitor_active_bookings($1)', [userID]);
        return results.rows;
    },

    addBooking: async (userID, data) => {
        const results = await client.query('SELECT add_booking($1, $2, $3, $4)', [data.attraction_id, userID, data.number_of_places, data.reservation_time]);
        return results.rows[0];
    }

}