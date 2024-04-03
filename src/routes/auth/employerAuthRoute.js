import { Router } from "express";
import EmployerValidation from "../../validators/employer/employerValidation.js";
import EmployerAuthController from "../../controllers/auth/employerAuth.js";

const EmplAuthRoute = Router();

EmplAuthRoute.post("/login", EmployerValidation.login, EmployerAuthController.login);
EmplAuthRoute.post("/register", EmployerValidation.register, EmployerAuthController.register);
EmplAuthRoute.post("/logout", EmployerAuthController.logout);

export default EmplAuthRoute;