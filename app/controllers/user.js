const { 
    userDataMapper,
    eventDataMapper
} = require('../dataMappers');

module.exports = {

    initialization: async (req, res, next) => {
        const ticketNb = parseInt(req.query.ticket_number, 10);

        if (isNaN(ticketNb)) {
            return next();
        }

        const user = await userDataMapper.findOne(ticketNb);

        if (!user) {
            return next();
        }

        const now = new Date();

        if (user.validity_end < now) {
            return res.send({
                message: 'Validity date expired',
                data: null
            });
        }

        req.session.user = user;

        res.send({
            message: 'User initialized',
            data: user
        });

    },

    getBookings: (req, res) => {

        // TODO : GET ALL BOOKINGS FOR THIS USER

        res.send({
            message: 'Bookings retrieved',
            data: {}
        })
    },

    book: async (req, res, next) => {
        const attractionIsExists = await eventDataMapper.verifyIfExists(req.body.attraction_id);

        if(!attractionIsExists) {
            return next();
        }

        // TODO : ADD BOOKING TO DATABASE & CHECK IF VISITOR CAN BOOK AT THIS TIME

        res.send({
            message: 'Booking created',
            data: {
                attraction_id: req.body.attraction_id,
                ticket_number: req.session.user.tickets_number,
                number_of_places: req.body.number_of_places,
                reservation_time: "2021-07-28T10:00:00.000Z"
            }
        })
    }
}