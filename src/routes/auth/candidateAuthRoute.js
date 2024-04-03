import { Router } from "express";
import CandidateValidation from "../../validators/candidate/candidateValidation.js";
import CandidateAuthController from "../../controllers/auth/candidateAuth.js";

const CandAuthRoute = Router();

CandAuthRoute.post("/c-login", CandidateValidation.login, CandidateAuthController.login);
CandAuthRoute.post("/c-signup", CandidateValidation.register, CandidateAuthController.register);
CandAuthRoute.post("/c-logout", CandidateAuthController.logout);

export default CandAuthRoute;