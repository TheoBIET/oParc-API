const express = require('express');
const router = express.Router();

const {
    errorController
} = require('../controllers');

router.use(errorController.resourceNotFound);

module.exports = router;