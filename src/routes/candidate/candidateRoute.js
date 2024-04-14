import { Router } from "express";
import CandidiateAuthenticateMiddleware from "../../middlewares/candidateAuthentication.js";
import CandidateController from "../../controllers/candidate/candidateController.js";

const CandidateRoute = Router();

CandidateRoute.get("/get-candidate/:candId", CandidiateAuthenticateMiddleware, CandidateController.getSingleCandidate);

export default CandidateRoute;