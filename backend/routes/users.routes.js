import { registerUser } from "../src/controllers/usersController.js";
import { createUserMiddleware } from "../middleware/user.middleware.js";
import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { loginUser } from "../src/controllers/authController.js";
import { userByEmail } from "../src/controllers/authController.js";

const router = Router()

router.post('/usuarios',createUserMiddleware,registerUser)
router.get('/usuarios',verifyToken,userByEmail)


export default router