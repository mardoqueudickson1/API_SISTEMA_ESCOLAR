import { Router } from "express";
import alunoController from "../controllers/alunoController";
import loginRequired from "../middlewares/loginRequired";


const router =  new Router();


router.post('/', loginRequired, alunoController.store);
router.get('/', alunoController.index);
router.put('/', alunoController.update);
router.delete('/', alunoController.delete);





export default router;