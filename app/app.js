const path = require('path');
const express = require('express');
const mysql = require('mysql2');

require("dotenv").config({ path: '../' });

const routes = require('./shop.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './ui/');

const con = mysql.createPool({
	connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_ROOT_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    multipleStatements: true
});

app.use( (req, res, next) => {
    req.con = con;
    next();
});

app.use(express.static(__dirname + '/public'));

app.use('/', routes);

// 404 error for all other routes
app.use(function (req,res,next){
    res.status(404).render('404', { pageTitle: 'page not found', path: '/404' });
});

// set up backend port
app.listen(3000, () => console.log('listening on port 3000'));