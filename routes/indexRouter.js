const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.redirect('/entries')
    // res.send("rererere")
});

module.exports = route;