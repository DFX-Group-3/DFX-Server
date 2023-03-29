import { Router } from "express";
import requireAuth from "../middleware/middleware.js";
import { experience_get, experience_post, experience_patch } from "../controllers/experienceController.js";


const experienceRouter = Router();
//middleware 
experienceRouter.use(requireAuth)

experienceRouter.get('/experience',experience_get)
experienceRouter.post('/experience', experience_post)
experienceRouter.patch('/experience', experience_patch)

export default experienceRouter


