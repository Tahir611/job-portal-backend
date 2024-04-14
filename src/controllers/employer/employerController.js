import EmployerAuthModel from "../../models/auth/employerAuthModel.js";

const EmployerController = {
  getAllEmployers: (req, res) => {
    try {
      return res.json({
        messageType: "Success",
        message: "Got All Employers",
      });
    } catch (error) {
      console.log("ERROR", error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  getSingleEmployer: (req, res) => {
    try {
      return res.json({
        messageType: "Success",
        message: "Got Single Employers",
      });
    } catch (error) {
      console.log("ERROR", error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  updaetEmployers: (req, res) => {
    try {
      return res.json({
        messageType: "Success",
        message: "Employer Upadetd Successfully",
      });
    } catch (error) {
      console.log("ERROR", error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  deleteEmployer: async (req, res) => {
    try {
      const params = req.params;
      const employer = await EmployerAuthModel.findByPk(params.employerId);
      if (!employer) {
        res.status(404).json({
          messageType: "Error",
          message: "Job not found",
        });
      }
      await employer.destroy();
      return res.json({
        messageType: "Success",
        message: "Employer Deleted Successfully",
      });
    } catch (error) {
      console.log("ERROR", error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
};

export default EmployerController;
