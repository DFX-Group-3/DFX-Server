import { Router } from "express";
import { portfolio_get, portfolio_post, portfolio_patch } from '../controllers/portfolioController.js'
import requireAuth from "../middleware/middleware.js";

const portfolioRouter = Router();
//middleware 
portfolioRouter.use(requireAuth)

portfolioRouter.get('/portfolio', portfolio_get)
portfolioRouter.post('/portfolio', portfolio_post)
portfolioRouter.patch('/portfolio', portfolio_patch)

export default portfolioRouter