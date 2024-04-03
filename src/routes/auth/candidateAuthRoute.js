import { Router } from "express";
import CandidateValidation from "../../validators/candidate/candidateValidation.js";
import CandidateAuthController from "../../controllers/auth/candidateAuth.js";

const CandAuthRoute = Router();

CandAuthRoute.post("/login", CandidateValidation.login, CandidateAuthController.login);
CandAuthRoute.post("/register", CandidateValidation.register, CandidateAuthController.register);
CandAuthRoute.post("/logout", CandidateAuthController.logout);

export default CandAuthRoute;