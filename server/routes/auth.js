import express from "express";
import { } from "../controllers/user.js";
import { googleAuth, signin, signup } from "../controllers/auth.js";

const router = express.Router()

//CREATING A USER
router.post("/signup", signup )



//SIGN IN
router.post("/signin", signin)



//GOOGLE AUTH
router.post("/google", googleAuth)

export default router;
