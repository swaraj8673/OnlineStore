const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Hi from home');
});

module.exports = router;