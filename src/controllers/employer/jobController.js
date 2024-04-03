import JobModel from "../../models/employer/jobModel.js";

const JobController = {
  getAllJobs: async (req, res) => {
    try {
      const jobs = await JobModel.findAll();
      res.json({
        messageType: "Success",
        message: "Got all jobs successfully",
        jobs,
      });
    } catch (error) {
      console.log("ERROR", error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
  getSingleJob: async (req, res) => {
    try {
      const params = req.params;
      console.log("PARAMS",params)
      const job = await JobModel.findByPk(params.jobId);
      res.json({
        messageType: "Success",
        message: "Got single successfully",
        job,
      });
    } catch (error) {
        console.log("ERROR",error);
    }
  },
  createJob: async (req, res) => {
    try {
      const {
        jobTitle,
        company,
        location,
        jobType,
        industry,
        experienceRequired,
        educationRequired,
        companyDescription,
        jobDescription,
      } = req.body;
      //   const employerId = req.employer.id;
      //   console.log("EMPLOYER_ID", employerId);
      const job = await JobModel.create({
        jobTitle,
        company,
        location,
        jobType,
        industry,
        experienceRequired,
        educationRequired,
        companyDescription,
        jobDescription,
        // EmployerId: employerId
      });
      res.json({
        messageType: "Success",
        message: "Job created successfully",
        job,
      });
    } catch (error) {
      console.log("ERROR", error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
  updateJob: async (req, res) => {
    try {
      const {
        jobTitle,
        company,
        location,
        jobType,
        industry,
        experienceRequired,
        educationRequired,
        companyDescription,
        jobDescription,
      } = req.body;
      const params = req.params;
      const job = await JobModel.findByPk(params.jobId);
      if (!job) {
        res.status(404).json({
          messageType: "Error",
          message: "Job Not Found",
        });
      }
      job.jobTitle = jobTitle;
      job.company = company;
      job.location = location;
      job.jobType = jobType;
      job.industry = industry;
      job.experienceRequired = experienceRequired;
      job.educationRequired = educationRequired;
      job.companyDescription = companyDescription;
      job.jobDescription = jobDescription;

      await job.save();

      res.json({
        messageType: "Success",
        message: "Job updated successfully",
        job,
      });
    } catch (error) {
      console.log("ERROR", error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
  deleteJob: async (req, res) => {
    const params = req.params;
    const job = await JobModel.findByPk(params.jobId);
    if (!job) {
      res.status(404).json({
        messageType: "Error",
        message: "Job not found",
      });
    }
    await job.destroy();
    res.json({
      messageType: "Success",
      message: "Job deleted successfully",
    });
  },
};

export default JobController;
