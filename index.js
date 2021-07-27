require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const PORT = process.env.PORT || 3003;
const {
    dashboardRouter,
    apiRouter
} = require('./app/routers');

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use('/api', apiRouter);
app.use('/admin', dashboardRouter);

app.listen(PORT, _ => {
    console.log(`oParc-API listening on port ${PORT}`);
});