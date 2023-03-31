// const Router = require("./routes")
const express = require('express')
const mongoose = require("mongoose");
const connectToMongo = require('./db');

connectToMongo();

const app = express()
const port = 5000
app.get('/', (req, res) => {
    res.send('Hello harry')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// app.use(Router);
console.log("hello");
console.log("nodemon is running now");