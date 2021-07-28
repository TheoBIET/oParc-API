const express = require("express");
const router = express.Router();

const { errorController, adminController } = require("../controllers");

router
    .get("/", adminController.index)
    .post("/login", adminController.login)
    .use(errorController.resourceNotFound);

module.exports = router;
