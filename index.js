const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require ('./config/winston');

const app = express();
const PORT = 3000;

//Middleware
// app.use(morgan('combined'));
app.use(morgan('combined', { stream: logger.stream }));


app.get('/', (req, res) => {
    let date = new Date();
    //console.log(`home route works ------  ${date}`);
    res.send('Bienvenidos a Express');
});

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`.bgGreen.black);
});