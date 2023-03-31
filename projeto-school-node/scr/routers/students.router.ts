import { Request, Response, Router } from "express";

const router = Router();

const students = [
    {
        name: 'Juliana Alves',
        email: 'analistajferreiraalves@gmail.com',
        document: '51938554744',
        password: '123456',
        age: 22
    },

    {
        name: 'Eduardo Alves',
        email: 'eduaazv@gmail.com',
        document: '12088739700',
        password: '123456',
        age: 23
    },

    {
        name: 'João Pedro Alves',
        email: 'jpalves@gmail.com',
        document: '11663459711',
        password: '123456',
        age: 21
    },

    {
        name: 'Beatriz Martins',
        email: 'biamartins@gmail.com',
        document: '40756964725',
        password: '123456',
        age: 21
    },

];

router.get('/', (req: Request, res: Response) => {
    res.send(students);
});

router.get ('/:document', (req:Request, res:Response) => {
    const student = students.find((std) => std.document === req.params.document);
    if(!student) return res.status(400).send({message:'Estudante não encontrado!'});
    res.status(200).send(student);
})

router.post('/', (req:Request, res:Response) => {
    if(req.body.age < 18) {
        return res.status(400).send({message: 'Estudante não foi criado pois não tem a idade mínima (18 anos).'});
    }
    students.push(req.body);
    res.status(201).send({message: 'Estudante criado com sucesso!'});
    
});

router.delete('/remove/:document', (req:Request, res:Response) => {
    const studentIndex = students.findIndex((student) => student.document === req.params.document);
    if(studentIndex === -1) {
        res.status(400).send({message: 'Estudante não encontrado!'});
    }
    students.splice(studentIndex, 1);
    res.status(200).send({message: 'Estudante removido com sucesso!'});
    
});

router.put('/:document', (req:Request, res:Response) => {
    const studentIndex = students.findIndex((student) => student.document === req.params.document);
    if(studentIndex === -1) {
        res.status(400).send({message: 'Estudante não encontrado!'});
    }
    students[studentIndex] = req.body;
    res.status(200).send({message: 'Estudante atualizado com sucesso!'});
    
});

export default router;

