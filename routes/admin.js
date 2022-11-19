const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('Hi from add products');
});

router.post('/products', (req, res, next) => {
    res.redirect('/');
})

module.exports = router;
