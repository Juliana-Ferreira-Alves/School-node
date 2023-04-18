import { Router } from "express";
import healthRouter from './health.router';
import userRouter from './user.router';
import bookRouter from './book.router';

const router = Router();

router.use('/health', healthRouter);
router.use('/user', userRouter);
router.use('/book', bookRouter);


export default router;