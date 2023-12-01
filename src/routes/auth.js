import { Router } from "express";
import { signin, signup } from "../controllers/auth";

const routerAuth = Router();
routerAuth.post("/signin", signin);
routerAuth.post("/signup", signup);
export default routerAuth;
