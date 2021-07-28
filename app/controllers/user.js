const { userDataMapper } = require('../dataMappers');

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
        res.send({
            message: 'Bookings retrieved',
            data: {}
        })
    },

    book: (req, res) => {
        res.send({
            message: 'Booking created',
            data: {}
        })
    }

}