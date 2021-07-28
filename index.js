require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const PORT = process.env.PORT || 3003;
const { dashboardRouter, apiRouter } = require("./app/routers");
const cors = require("cors");

const corsOptions = {
    origin: "http://localhost:3001",
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

app.use(express.static("public"));
app.use("/api", apiRouter);
app.use("/admin", dashboardRouter);

app.listen(PORT, (_) => {
    console.log(`oParc-API listening on port ${PORT}`);
});
