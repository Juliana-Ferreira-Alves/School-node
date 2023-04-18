import { Request, Response, Router } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const healthCheck = { messager: 'Aplicação on com sucesso!'};
    res.send(healthCheck);

});

router.get('/check', (req:Request, res:Response) => {
    const healthCheck = { messager: 'Aplicação está funcionando normalmente!'};
    res.send(healthCheck);
})

export default router;

//http://localhost:3000/health/check
//http://localhost:3000/