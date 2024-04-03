const JobController = {
    getAllJobs: (req, res) => {
        res.json({
            messageType: "Success",
            message: "Got all successfully"
        })
    },
    getSingleJob: (req, res) => {
        res.json({
            messageType: "Success",
            message: "Got single successfully"
        })
    },
    createJob: (req, res) => {
        res.json({
            messageType: "Success",
            message: "Job created successfully"
        })
    },
    updateJob: (req, res) => {
        res.json({
            messageType: "Success",
            message: "Job updated successfully"
        })
    },
    deleteJob: (req, res) => {
        res.json({
            messageType: "Success",
            message: "Job deleted successfully"
        })
    }
}

export default JobController;