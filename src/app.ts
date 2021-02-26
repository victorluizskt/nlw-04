import 'reflect-metadata';
import express from 'express';
import {router} from './routes';
import createConnection from './database';

createConnection();
const app = express();
app.use(express.json());

/**
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração especifica
 */
app.use(router);

export { app };