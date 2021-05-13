const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 8080;
const handlers = require('./lib/handlers');
const db = require('./db');
//form handling
const bodyParser = require('body-parser');
// // create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });



// POST /login gets urlencoded bodies
app.post('/', urlencodedParser,function (req, res) {
  console.log(req.body);
})
  
// configure Handlebars view engine
app.engine('handlebars',expressHandlebars({
    defaultLayout: 'main',
}));
app.set('view engine','handlebars');

app.use(express.static(__dirname+'/public'));

app.get('/',handlers.home);

app.get('/newbook',handlers.newbook)

app.post('/newbook',urlencodedParser,function (req, res) {
  res.send('Done');
  db.insertBook(JSON.parse(JSON.stringify(req.body)));
  console.log(req.body);
})


//custom 404 page
// If we put the 404 handler above
// the routes, the home page and About page would stop working; instead,
// those URLs would result in a 404.
app.use(handlers.notFound);

//custom 500 page
app.use(handlers.serverError);

app.listen(port,()=>
console.log(`Express started on http://localhost:${port};\n`
+'press Ctrl-C to exit'));