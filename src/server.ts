import express, { response } from 'express';
import {Request, Response} from 'express';

const app = express();

/**
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração especifica
 */

// https://localhost:3333/users
app.get("/", (req: Request, res: Response) => {
    return res.json({message: "Hello Word NLW04"});
});

// 1 param => Rota(Recurso API)
// 2 param => Request, Response

app.post("/", (req: Request, res: Response) => {
    // Recebeu os dados para salvar
    return res.json({message: "Os dados foram salvos com sucesso!"});
});

app.listen(3333, () => {
    console.log("Server is running port: " + 3333);
});