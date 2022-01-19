const express = require('express');
const path = require('path');

const app = express();

const mainRouter = require('./routes/mainRoutes');


// view engine setup
app.set('views', path.resolve(__dirname,'./views'));
app.set('view engine', 'ejs');


app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode 
app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.listen(8000, () => 
console.log('Servidor funcionando en puerto 8000'));

app.use(mainRouter);
