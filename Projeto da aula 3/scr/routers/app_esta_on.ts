import { Request, Response, Router } from "express";

const router = Router();

router.get('/prod', (req: Request, res: Response) => {
    const appOn = { message: 'Aplicação está on!' }
    res.send(appOn);
});

export default router;
