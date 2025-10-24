import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
const login = Router();

login.post("/login", AuthController.login);

export { login };
