const CandidateController = {
    getAllCandidates: (req, res) => {
        try {
            res.json({
                messageType: "Success",
                message: "Got All candidates"
            });
        } catch (error) {
            console.log("ERROR",error);
            res.status(500).json({
                message: "Internal Server Error"
            });
        }
    },
    getSingleCandidate: (req, res) => {
        try {
            res.json({
                messageType: "Success",
                message: "Got Single candidate"
            });
        } catch (error) {
            console.log("ERROR",error);
            res.status(500).json({
                message: "Internal Server Error"
            });
        }
    },
    updateCandidate: (req, res) => {
        try {
            res.json({
                messageType: "Success",
                message: "Candidate Updated Successfully"
            });
        } catch (error) {
            console.log("ERROR",error);
            res.status(500).json({
                message: "Internal Server Error"
            });
        }
    },
    deleteCandidate: (req, res) => {
        try {
            res.json({
                messageType: "Success",
                message: "Candidate Deleted Successfully"
            });
        } catch (error) {
            console.log("ERROR",error);
            res.status(500).json({
                message: "Internal Server Error"
            });
        }
    }  
}

export default CandidateController;