const express = require('express');
const router = express.Router();

const {
    errorController,
    userController,
    eventController
} = require('../controllers');

const {
    userMiddleware
} = require('../middlewares');

router
    .get('/init', userController.initialization)
    .get('/bookings', userMiddleware.verifyConnection, userController.getBookings)
    .put('/book', userMiddleware.verifyConnection, userController.book)
    .get('/events', eventController.getAll)
    .use(errorController.resourceNotFound);

module.exports = router;