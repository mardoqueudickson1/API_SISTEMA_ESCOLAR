import { Router } from "express";
import ProfessorController from "../controllers/adminController";
import loginRequired from "../middlewares/loginRequired";


const router =  new Router();


router.post('/', loginRequired, ProfessorController.store);
router.get('/', loginRequired, ProfessorController.index);



export default router;