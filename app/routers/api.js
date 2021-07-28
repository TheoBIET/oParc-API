const express = require("express");
const router = express.Router();

const {
    errorController,
    userController,
    eventController,
    incidentController,
} = require("../controllers");

const { userMiddleware, adminMiddleware } = require("../middlewares");

router
    .get("/init", userController.initialization)

    .get(
        "/bookings",
        userMiddleware.verifyConnection,
        userController.getBookings
    )

    .put("/book", userMiddleware.verifyConnection, userController.book)

    .get("/events", eventController.getAll)

    .get(
        "/incidents",
        adminMiddleware.checkPermission,
        incidentController.details
    )

    .post(
        "/incidents/:id",
        adminMiddleware.checkPermission,
        incidentController.updateDetails
    )

    .post(
        "/incidents/new",
        adminMiddleware.checkPermission,
        incidentController.create
    )

    .use(errorController.resourceNotFound);

module.exports = router;
