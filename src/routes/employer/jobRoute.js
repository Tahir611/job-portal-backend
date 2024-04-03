import { Router } from "express";
import jobController from "../../controllers/employer/jobController.js";
import JobValidator from "../../validators/employer/jobValidation.js";


const jobRouter = Router();

jobRouter.get("/get-all-jobs", jobController.getAllJobs);
jobRouter.get("/get-job/:jobId", jobController.getSingleJob);
jobRouter.post("/create-job",JobValidator.create, jobController.createJob);
jobRouter.put("/update-job/:jobId",JobValidator.update, jobController.updateJob);
jobRouter.delete("/delete-job/:jobId", jobController.deleteJob);

export default jobRouter;