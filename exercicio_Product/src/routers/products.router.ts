import { Request, Response, Router } from 'express';
import productsService from '../services/products.service';
import { authorizationMiddleware } from '../middlewares/authorization.middlewares';

const router = Router();

//GET (Buscar Produto) => 1) Crie um arquivo com uma rota GET para retornar o seguinte objeto:

router.get('/', authorizationMiddleware, async (req: Request, res: Response) => {
    const products = await productsService.getAll();
    res.send(products);
});

router.get('/:id', authorizationMiddleware, async (req: Request, res: Response) => {
    await productsService.update(parseInt(req.params.id), req.body);
    const product = await productsService.getById(parseInt(req.params.id));
    if (!product) return res.status(400).send({ message: 'Produto não encontrado!' });
    res.status(200).send(product);
})


//POST (Criar Produto) => 2) Crie um endpoint de POST para adicionar item no array do exercício 1.

router.post('/', authorizationMiddleware, async (req: Request, res: Response) => {
    await productsService.create(req.body);
    res.status(201).send({ message: 'Produto adicionado com sucesso!'});

});

router.post('/authorization',async (req: Request, res: Response) => {
    try{
        const token = await productsService.authorization(req.body.id, req.body.password);
        res.status(200).send({token});

    } catch(error: any){
        res.status(401).send({message: error.message});
    }
})

//PUT (Atualizar Produto) => 3) Crie um endpoint de PUT para atualizar um item no array do exercício 1.

router.put('/:id', authorizationMiddleware, async (req: Request, res: Response) => {
    try {
        await productsService.update(parseInt(req.params.id), req.body);
        res.status(200).send({ message: 'Produto atualizado com sucesso!' });
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }

})

//DELETE (Remover Produto) => 4) Crie um endpoint de DELETE para remover um item no array do exercício 1.

router.delete('/remove/:id', authorizationMiddleware, async (req: Request, res: Response) => {
    try {
        await productsService.remove(parseInt(req.params.id));
        res.status(200).send({ message: 'Produto removido com sucesso!' });
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }

});


export default router;