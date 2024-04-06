import { Router } from "express";
import jobController from "../../controllers/employer/jobController.js";
import JobValidator from "../../validators/employer/jobValidation.js";
import EmployerAuthenticateMiddleware from "../../middlewares/employerAuthentication.js";
import path from "path";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import JobAppliedModel from "../../models/candidate/jobAppliedModel.js";

const jobRouter = Router();

jobRouter.get("/get-all-jobs", jobController.getAllJobs);
jobRouter.get("/get-job/:jobId", jobController.getSingleJob);
jobRouter.post(
  "/create-job",
  EmployerAuthenticateMiddleware,
  JobValidator.create,
  jobController.createJob
);
jobRouter.put(
  "/update-job/:jobId",
  EmployerAuthenticateMiddleware,
  JobValidator.update,
  jobController.updateJob
);
jobRouter.delete(
  "/delete-job/:jobId",
  EmployerAuthenticateMiddleware,
  jobController.deleteJob
);
jobRouter.get(
  "/get-job-of-employer",
  EmployerAuthenticateMiddleware,
  jobController.getSpecificEmployerJob
);

jobRouter.get("/resume/:candId", async (req, res) => {
  try {
    const { candId } = req.params;
    const data = await JobAppliedModel.findAll({
      where: { CandidateId: candId },
    });

    if (!data) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    const fullUrl =
      req.protocol + "://" + req.get("host") + "/" + data[0].resume.replace(/\\/g, "/");

    console.log("DATA", data);
    return res.json({
      message: "Got resume successfully",
    //   resume: data[0].resume,
    //   data,
      fullUrl,
    });
  } catch (error) {
    console.log("ERROR", error);
    return res.json({
      message: "Internal Server error",
      error,
    });
  }
});

jobRouter.get("/uploads/:filename", (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const fileName = req.params.filename;
  const filePath = path.join(__dirname, "../../../uploads", fileName);
  res.sendFile(filePath);
});

export default jobRouter;
