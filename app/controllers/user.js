module.exports = {

    initialization: (req, res) => {
        res.send({
            message: 'User initialized',
            data: {}
        })
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