import { Router } from "express";
import { profile_get, profile_post , profile_patch} from "../controllers/profileController.js";
import requireAuth from "../middleware/middleware.js";

const profileRouter = Router();
//middleware 
profileRouter.use(requireAuth)


profileRouter.get('/profile', profile_get)
profileRouter.post('/profile', profile_post)
profileRouter.patch('/profile/:id',profile_patch)
export default profileRouter