import { Router } from "express";
import jobController from "../../controllers/employer/jobController.js";


const jobRouter = Router();

jobRouter.get("/get-all-jobs", jobController.getAllJobs);
jobRouter.get("/get-job", jobController.getSingleJob);
jobRouter.post("/create-job", jobController.createJob);
jobRouter.put("/update-job/:id", jobController.updateJob);
jobRouter.delete("/delete-job/:id", jobController.deleteJob);

export default jobRouter;