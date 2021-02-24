import 'reflect-metadata';
import express from 'express';
import {router} from './routes';
import './database';

const app = express();
app.use(express.json())

/**
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração especifica
 */

 app.use(router);

app.listen(3333, () => {
    console.log("Server is running port: " + 3333);
});

// #rumoaoproximonivel
// #jornadainfinita