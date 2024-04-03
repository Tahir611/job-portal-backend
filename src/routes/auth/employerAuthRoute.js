import { Router } from "express";
import EmployerValidation from "../../validators/employer/employerValidation.js";
import EmployerAuthController from "../../controllers/auth/employerAuth.js";
import EmployerController from "../../controllers/employer/employerController.js";

const EmplAuthRoute = Router();

EmplAuthRoute.post("/e-login", EmployerValidation.login, EmployerAuthController.login);
EmplAuthRoute.post("/e-signup", EmployerValidation.register, EmployerAuthController.register);
EmplAuthRoute.post("/e-logout", EmployerAuthController.logout);
// EmplAuthRoute.delete("/e-delete/:employerId", EmployerController.deleteEmployer);

export default EmplAuthRoute;