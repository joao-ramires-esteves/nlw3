import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// rota => todo o app.get
// recurso => o '/'

// metodos http => GET, POST, PUT, DELETE
// parametros

// GET => buscando info
// POST => criando info
// PUT => editando
// DELETE => deletando

// query params => ?search=meunome&page=2
// route params => identificar um recurso
// body => infos `complexas`

app.listen(3333);

// ORM => object relational mapping

module.exports = app;


