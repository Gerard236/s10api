const express = require('express');
const app = express();
const connect = require(`./database/connect`);
app.use(express.json());
require('dotenv').config();

connect.createConnection();

// ruta: http://localhost:3000/api/v1/films/details/6398da7d3c123413f1d69898

app.use('/api/v1/films/', require('./routes/rutesJoi.js'));

app.listen(3000, function(){
    console.log('My Server is running!!! on port 3000');
});
