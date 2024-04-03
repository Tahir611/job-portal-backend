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
  getSingleJob: (req, res) => {
    res.json({
      messageType: "Success",
      message: "Got single successfully",
    });
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
        job
      })
    } catch (error) {
      console.log("ERROR", error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
  updateJob: (req, res) => {
    res.json({
      messageType: "Success",
      message: "Job updated successfully",
    });
  },
  deleteJob: (req, res) => {
    res.json({
      messageType: "Success",
      message: "Job deleted successfully",
    });
  },
};

export default JobController;
