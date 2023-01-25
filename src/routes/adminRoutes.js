import { Router } from "express";
import AdminController from "../controllers/adminController";
import loginRequired from "../middlewares/loginRequired";


const router =  new Router();


router.post('/', AdminController.store);
router.get('/', loginRequired, AdminController.index);



export default router;