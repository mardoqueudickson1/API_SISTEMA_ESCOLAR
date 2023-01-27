import { Router } from "express";
import loginRequired from "../middlewares/loginRequired";
import CursoController from "../controllers/CursoController";

const router = new Router()

router.post('/', CursoController.store);
router.get('/', CursoController.index);
router.delete('/:id', CursoController.delete);
router.put('/:id', CursoController.update);


export default router;