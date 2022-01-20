const path = require('path');
const express = require('express');

const app = express();

const mainRouter = require('./routes/mainRoutes');


// view engine setup
app.set('views', path.resolve(__dirname,'./views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));

//URL encode 
app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.listen(process.env.PORT || 8000, () => {
  console.log('Servidor funcionando en puerto 8000');
});

app.use(mainRouter);
