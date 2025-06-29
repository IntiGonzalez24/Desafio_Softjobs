import { registerUser } from "../src/controllers/usersController.js";

import { Router } from "express";

const router = Router()

router.post('/usuarios',registerUser)

export default router