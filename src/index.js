const path = require('path')
const express = require('express')
const morgan = require('morgan')
const hbs = require('express-handlebars');

const app = express()
const port = 3000

//Static files
app.use('/public', express.static('./src/public'));

//Bootstrap
app.use('/css', express.static('./node_modules/bootstrap/dist/css'));
app.use('/js', express.static('./node_modules/bootstrap/dist/js'));

//HTTP middleware logger
app.use(morgan('combined'))

//Templete engine
app.engine('hbs', hbs.engine(
  {
    extname: '.hbs'
  }
));
app.set('view engine', 'hbs');
app.set('views', './src/resource/views')


app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})