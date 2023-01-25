import { Router } from "express";
import alunoController from "../controllers/alunoController";
import loginRequired from "../middlewares/loginRequired";


const router =  new Router();


router.post('/', loginRequired, alunoController.store);
router.get('/', loginRequired, alunoController.index);
router.put('/', loginRequired, alunoController.update);
router.delete('/', loginRequired, alunoController.delete);





export default router;