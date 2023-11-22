const express = require('express');
const cors = require('cors');

const apiRouterUser = require('./user/routers/api.router');

require('./user/databases/mysql.db');

const app = express();

app.use(express.json());

const NODE_ENV = process.env.NODE_ENV || 'development';
app.use(NODE_ENV === 'development' ? cors() : cors());

// const cors = require('cors');
// app.use(cors());
app.get('/', (req, res) => res.send());

app.use('/api', apiRouterUser);

module.exports = app;
