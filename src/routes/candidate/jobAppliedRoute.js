import { Router } from "express";
import CandidiateAuthenticateMiddleware from "../../middlewares/candidateAuthentication.js";
import JobAppliedController from "../../controllers/candidate/jobAppliedController.js";




const jobAppliedRoute = Router();

jobAppliedRoute.post("/apply-job/:jobId",CandidiateAuthenticateMiddleware, JobAppliedController.applyJob);
jobAppliedRoute.get("/get-applied-job-of-specific-user", CandidiateAuthenticateMiddleware, JobAppliedController.getAppliedJobOfUser)

export default jobAppliedRoute;