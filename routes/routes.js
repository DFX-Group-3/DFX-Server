import { Router } from "express";
import { login_post} from "../controllers/controller.js";

const router = Router();

router.post('/login', login_post);


export default router;