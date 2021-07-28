const express = require('express');
const router = express.Router();

const {
    errorController,
    adminController
} = require('../controllers');


router
    .get('/', adminController.index)
    .use(errorController.resourceNotFound);

module.exports = router;