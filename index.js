const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require ('./config/winston');

const app = express();
const PORT = 3000;

//Middleware
// app.use(morgan('combined'));
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());

const movies = [
{id:1, title:"Soy Leyenda"},
{id:2, title:"Aliens"},
{id:3, title:"Blade Runner 3049"},
{id:4, title:"Dune"},
]

app.get('/', (req, res) => {
    let date = new Date();
    //console.log(`home route works ------  ${date}`);
    res.send('Bienvenidos a Express');
});

//End-poins CRUD movies
app.get('/movies',(req, res) => {
    res.json(movies);
})

app.get('/movies/:id', (req, res) => {
    const id = req.params.id;
    // const {id} = req.params.id;
    let movie = movies.find(movie => movie.id == id);
    res.json(movie);
});


app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`.bgGreen.black);
});