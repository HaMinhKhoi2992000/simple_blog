const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');

const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

//Connect database
db.connect();

//Static files
app.use('/public', express.static('./src/public'));

//Bootstrap
app.use('/css', express.static('./node_modules/bootstrap/dist/css'));
app.use('/js', express.static('./node_modules/bootstrap/dist/js'));

//HTTP middleware logger
app.use(morgan('combined'));

//Middleware for processing json, url post method data
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//Templete engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', './src/resource/views');

//Route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
