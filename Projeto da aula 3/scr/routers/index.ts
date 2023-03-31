import { Request, Response, Router } from "express";
import routers from './routers'      
import appOn from './app_esta_on'

const router = Router();

router.use('/', router);
router.use('/postItem', router);
router.use('/putItem', router);
router.use('/delItem', router);

export default router;