import { Request, Response, Router } from 'express';
import productsService from '../services/products.service';



const router = Router();


//GET (Buscar Produto) => 1) Crie um arquivo com uma rota GET para retornar o seguinte objeto:

router.get('/', (req: Request, res: Response) => {
    const products = productsService.getAll();
    res.send(products);
});


//POST (Criar Produto) => 2) Crie um endpoint de POST para adicionar item no array do exercício 1.

router.post('/', (req: Request, res: Response) => {
    productsService.create(req.body);
    res.status(201).send({ message: 'Produto adicionado com sucesso!' });

});

//PUT (Atualizar Produto) => 3) Crie um endpoint de PUT para atualizar um item no array do exercício 1.

router.put('/:id', (req: Request, res: Response) => {
    try {
        productsService.update(parseInt(req.params.id) , req.body);
        res.status(200).send({ message: 'Produto atualizado com sucesso!' });
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }

})

//DELETE (Remover Produto) => 4) Crie um endpoint de DELETE para remover um item no array do exercício 1.

router.delete('/remove/:id', (req: Request, res: Response) => {
    try {
        productsService.remove(parseInt(req.params.id));
        res.status(200).send({ message: 'Produto removido com sucesso!' });
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }

});


export default router;