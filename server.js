const express = require('express');
const sequelize = require('./config/connection')
const path = require('path')
const exphbs = require('express-handlebars');
const controlls = require('./controllers/api')
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});
app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(controlls);

app.listen(PORT, () => {
    console.log('app listening on port 3001')
    sequelize.sync({force:false});
});
