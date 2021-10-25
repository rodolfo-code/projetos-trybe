const express = require('express');
const bodyParser = require('body-parser');
require('dotenv/config');

const error = require('./middlewares/error');
const users = require('./routes/userRouter');
const login = require('./routes/loginRouter');
const categories = require('./routes/categoriesRouter');
const post = require('./routes/postRouter');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', users);
app.use('/login', login);
app.use('/categories', categories);
app.use('/post', post);

app.use(error);