require('@babel/register');
require('dotenv').config();
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const ReactDOMServer = require('react-dom/server');
const React = require('react');

const express = require('express');
//const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
const render = require('./lib/renderTemplate');

const authRouter = require('./routes/auth');
const HomePage = require('./src/views/Home');

const app = express();
const PORT = 3000;

const HomeRouter = require('./routes/home');

const sessionConfig = {
  name: 'sid', // название куки
  store: new FileStore({}), // подключаем БД для храненя куков
  secret: process.env.COOKIE_SECRET, // ключ для шифрования cookies //node====>>> require('crypto').randomBytes(10).toString('hex')
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24 * 10,
  },
}

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', HomeRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
