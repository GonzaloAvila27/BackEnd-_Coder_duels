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

module.exports = app;