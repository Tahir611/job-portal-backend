import { Router } from "express";
import multer from "multer";

import CandidiateAuthenticateMiddleware from "../../middlewares/candidateAuthentication.js";
import JobAppliedController from "../../controllers/candidate/jobAppliedController.js";
// import EmployerAuthenticateMiddleware from "../../middlewares/employerAuthentication.js";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage });



const jobAppliedRoute = Router();

jobAppliedRoute.post("/apply-job/:jobId", upload.single("resume"),CandidiateAuthenticateMiddleware, JobAppliedController.applyJob);
jobAppliedRoute.get("/get-applied-job-of-specific-user", CandidiateAuthenticateMiddleware, JobAppliedController.getAppliedJobOfUser);

export default jobAppliedRoute;