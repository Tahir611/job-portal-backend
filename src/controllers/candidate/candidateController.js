import CandidateAuthModel from "../../models/auth/candidateAuthModel.js";

const CandidateController = {
    getAllCandidates: (req, res) => {
        try {
            return res.json({
                messageType: "Success",
                message: "Got All candidates"
            });
        } catch (error) {
            console.log("ERROR",error);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    },
    getSingleCandidate: async (req, res) => {
        const {candId} = req.params;
        console.log("Candidate id",candId)
        try {
            const candidate = await CandidateAuthModel.findByPk(candId);
            if(!candidate){
                return res.json({
                    message: "User not found"
                })
            }
            return res.json({
                messageType: "Success",
                message: "Got Single candidate",
                candidate
            });
        } catch (error) {
            console.log("ERROR",error);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    },
    updateCandidate: (req, res) => {
        try {
            return res.json({
                messageType: "Success",
                message: "Candidate Updated Successfully"
            });
        } catch (error) {
            console.log("ERROR",error);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    },
    deleteCandidate: (req, res) => {
        try {
            return res.json({
                messageType: "Success",
                message: "Candidate Deleted Successfully"
            });
        } catch (error) {
            console.log("ERROR",error);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    }  
}

export default CandidateController;