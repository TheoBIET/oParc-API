const express = require('express');
const router = express.Router();

const {
    errorController,
    incidentController,
    dashboardController
} = require('../controllers');


router
    .get('/', dashboardController.index)
    .get('/incident/:id', incidentController.details)
    .post('/incident/:id', incidentController.updateDetails)
    .post('/incident/new', incidentController.create)
    .use(errorController.resourceNotFound);

module.exports = router;