import { Router } from "express";
import jobController from "../../controllers/employer/jobController.js";
import JobValidator from "../../validators/employer/jobValidation.js";
import EmployerAuthenticateMiddleware from "../../middlewares/employerAuthentication.js";


const jobRouter = Router();

jobRouter.get("/get-all-jobs", jobController.getAllJobs);
jobRouter.get("/get-job/:jobId" , jobController.getSingleJob);
jobRouter.post("/create-job", EmployerAuthenticateMiddleware, JobValidator.create, jobController.createJob);
jobRouter.put("/update-job/:jobId", EmployerAuthenticateMiddleware, JobValidator.update, jobController.updateJob);
jobRouter.delete("/delete-job/:jobId", EmployerAuthenticateMiddleware, jobController.deleteJob);
jobRouter.get("/get-job-of-employer", EmployerAuthenticateMiddleware, jobController.getSpecificEmployerJob )

export default jobRouter;