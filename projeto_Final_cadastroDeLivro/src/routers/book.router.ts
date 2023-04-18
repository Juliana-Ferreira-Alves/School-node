import { Request, Response, Router } from "express";
import BookService from "../services/book.service";
import { authorizationMiddleware } from "../middlewares/authorization.middlewares";

const router = Router();

router.get('/', authorizationMiddleware, async (req: Request, res: Response) => {
    const book = await BookService.getAll();
    res.send(book);
});

router.get('/:isbn', authorizationMiddleware, async (req: Request, res: Response) => {
    const book = await BookService.getByISBN(req.params.isbn);
    if (!book) return res.status(400).send({ message: 'Livro não encontrado!' });
    res.status(200).send(book);
})

router.post('/', authorizationMiddleware, async (req: Request, res: Response) => {
    await BookService.create(req.body);
    res.status(201).send({ message: 'Livro adicionado com sucesso!'});

});

router.delete('/remove/:isbn', authorizationMiddleware, async (req: Request, res: Response) => {
    try {
        await BookService.remove(req.params.isbn);
        res.status(200).send({ message: 'Livro removido com sucesso!'});
    } catch (error: any) {
        res.status(400).send({ message: error.message});
    }

});

router.put('/:isbn', authorizationMiddleware, async (req: Request, res: Response) => {
    try {
        await BookService.update(req.params.isbn, req.body);
        res.status(200).send({ message: 'Livro atualizado com sucesso!'});
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }

});

export default router;

