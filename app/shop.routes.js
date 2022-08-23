// imports
const express = require('express');
const router = express.Router();
const cors = require('cors');

// render contact page
router.get('/contact', (req, res, next) => {
    res.render('contact', { pageTitle: 'contact' });
});

// render search page
router.get('/search', (req, res, next) => {
    res.render('search', { pageTitle: 'search' });
});

// render shop page & category queries for shop page
router.get('/products', (req, res, next) => {
    const db = req.con;
    let data = "";

    let product = "";
    product = req.query.product;

    db.query("SELECT * FROM product WHERE product.category = 'subscriptions'; SELECT * FROM product WHERE product.category = 'produce'; SELECT * FROM product WHERE product.category = 'other'", [1, 2, 3], (err, rows) => {
        if (err) throw err;
        data = rows;

        res.render('product-list', { pageTitle: 'our products', data: data, product: product });
        console.log(rows[0]);
    });
});

// product detail page
router.get('/products/:id', (req, res, next) => {
    const id = req.params.id;
    let data = "";
    const db = req.con;

    db.query('SELECT * FROM product WHERE product.id = ?', id, (err, rows) => {
        if (err) throw err;
        data = rows;

        res.render('product-detail', { pageTitle: 'details', data: data, id: id });
    });
});

// index page
router.get('/', (req, res, next) => {
    const db = req.con;
    let data = "";

    let product = "";
    product = req.query.product;

    db.query('SELECT * FROM product WHERE featured = 1', product, (err, rows) => {
        if (err) throw err;
        data = rows;

        res.render('index', { pageTitle: 'crave farms', data: data, product: product });
    });
});

// route to api
router.get('/api', cors(), function(req, res, next) {
    const db = req.con;
    let product = "";
    product = req.query.product;
    console.log(req);
    db.query('SELECT * FROM product', product, (err, results, rows) => {
        if (err) throw err;
        res.send(JSON.stringify(results));
    });
});

module.exports = router;
