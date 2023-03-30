import { Router } from "express";
import { qualification_get, qualification_post, qualification_patch } from "../controllers/qualificationController.js";
import requireAuth from "../middleware/middleware.js";

const qualificationRouter = Router();
//middleware 
qualificationRouter.use(requireAuth)


qualificationRouter.get('/qualification', qualification_get)
qualificationRouter.post('/qualification', qualification_post)
qualificationRouter.patch('/qualification', qualification_patch)

export default qualificationRouter