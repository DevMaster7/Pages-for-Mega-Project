// Import necessary modules
const express = require('express')
// const morgan = require('morgan')
// const path = require('path');
const app = express()
const port = 3000

// Using Ejs
// app.set('view engine', 'ejs')

// Middlewares
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(morgan('dev'))
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
// API or Routes
app.get('/', (req, res) => {
    res.sendFile("index.html",{root:__dirname})
    // res.send("index.html")
    // res.send('Hello World!');
});

// Server Call
app.listen(port, () => {
    console.log('Example app listening on port ' + port);
});