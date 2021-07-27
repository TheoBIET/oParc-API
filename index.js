require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;
const {
    dashboardRouter,
    apiRouter
} = require('./app/routers');

app.use('/api', apiRouter);
app.use('/', dashboardRouter);

app.listen(PORT, _ => {
    console.log(`oParc-API listening on port ${PORT}`);
});