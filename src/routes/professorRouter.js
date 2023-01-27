import { Router } from "express";
import professorController from "../controllers/professorController";

const router = new Router()

router.post('/', professorController.store);
router.get('/', professorController.index);
router.put('/:id', professorController.update);
router.delete('/:id', professorController.delete);


export default router;