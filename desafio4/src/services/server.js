const { urlencoded } = require('express');
const express = require('express');
const mainRouter = require('../routes/index');
const app = express();

app.use(express.json)
app.use(express.urlencoded({extended: true}))

app.use('/api', mainRouter);

app.get(`/`, (req, res) => {
    res.json({
        msg: `ok app :D`
    })
});

app.use((err, req, next) => {
    const status = err.status || 500;
    const message = err.message || `internal server error`;

    res.status(status).json({
        message,
        stack: err.stack, 
    })
});

module.exports = app;