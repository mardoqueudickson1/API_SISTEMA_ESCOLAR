import { Router } from "express";
import alunoController from "../controllers/alunoController";
import loginRequired from "../middlewares/loginRequired";


const router = new Router();


router.post('/', alunoController.store);
router.get('/', alunoController.index);
router.put('/:id', alunoController.update);
router.delete('/:id', alunoController.delete);





export default router;