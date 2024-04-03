const EmployerController = {
    getAllEmployers: (req, res) => {
        try {
            res.json({
                messageType: "Success",
                message: "Got All Employers"
            })
        } catch (error) {
            console.log("ERROR",error);
            res.status(500).json({
                message: "Internal Server Error"
            })
        }
    },
    getSingleEmployer: (req, res) => {
        try {
            res.json({
                messageType: "Success",
                message: "Got Single Employers"
            })
        } catch (error) {
            console.log("ERROR",error);
            res.status(500).json({
                message: "Internal Server Error"
            })
        }
    },
    updaetEmployers: (req, res) => {
        try {
            res.json({
                messageType: "Success",
                message: "Employer Upadetd Successfully"
            })
        } catch (error) {
            console.log("ERROR",error);
            res.status(500).json({
                message: "Internal Server Error"
            })
        }
    },
    deleteEmployers: (req, res) => {
        try {
            res.json({
                messageType: "Success",
                message: "Employer Deleted Successfully"
            })
        } catch (error) {
            console.log("ERROR",error);
            res.status(500).json({
                message: "Internal Server Error"
            })
        }
    },
}

export default EmployerController;