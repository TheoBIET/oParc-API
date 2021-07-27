const express = require('express');
const router = express.Router();

const {
    errorController
} = require('../controllers');

router
    .get('/init', userController.initialization)
    .get('/bookings', userController.getBookings)
    .put('/book', userController.book)
    .get('/events', eventController.getAll)
    .use(errorController.resourceNotFound);

module.exports = router;