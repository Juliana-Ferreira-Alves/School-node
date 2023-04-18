import { Request, Response, Router } from "express";
import UserService from "../services/user.service";
import { authorizationMiddleware } from "../middlewares/authorization.middlewares";

const router = Router();

router.get('/', authorizationMiddleware, async (req: Request, res: Response) => {
    const user = await UserService.getAll();
    res.send(user);
});

router.get('/:document', authorizationMiddleware, async (req: Request, res: Response) => {
    const user = await UserService.getByDocument(req.params.document);
    if (!user) return res.status(400).send({ message: 'Usuário não encontrado!' });
    res.status(200).send(user);
})

router.post('/', authorizationMiddleware, async (req: Request, res: Response) => {
    await UserService.create(req.body);
    res.status(201).send({ message: 'Usuário criado com sucesso!'});

});

router.post('/authorization', async (req: Request, res: Response) => {
        try {
        const token = await UserService.authorization(req.body.document, req.body.password);
        res.status(200).send({ token });
    } catch (error: any) {
        res.status(401).send({ message: error.message });
    }
});

router.delete('/remove/:document', authorizationMiddleware, async (req: Request, res: Response) => {
    try {
        await UserService.remove(req.params.document);
        res.status(200).send({ message: 'Usuário removido com sucesso!'});
    } catch (error: any) {
        res.status(400).send({ message: error.message});
    }

});

router.put('/:document', authorizationMiddleware, async (req: Request, res: Response) => {
    try {
        await UserService.update(req.params.document, req.body);
        res.status(200).send({ message: 'Usuário atualizado com sucesso!'});
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }

});

export default router;

