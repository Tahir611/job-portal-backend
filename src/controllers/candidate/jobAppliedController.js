import JobAppliedModel from "../../models/candidate/jobAppliedModel.js";
import JobModel from "../../models/employer/jobModel.js";

const JobAppliedController = {
    applyJob:async(req,res)=>{
        try {

            const {jobId} = req.params;
            // const {resume} = req.body;
            const resume = req.file ? req.file.path : null
            const application = await JobAppliedModel.findOne({where:{JobId:jobId,CandidateId:req.candidate.id}})
            if(application){
                return res.json({message:"Already Applied for this job"})
            }
            await JobAppliedModel.create({JobId:jobId,CandidateId:req.candidate.id,applicationStatus:"applied", resume})
            
            return res.json({message:`Candidate with id ${req.candidate.id} Applied for the job with id ${jobId} sucessfully`})
        } catch (error) {
            console.log("ERROR",error);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    },

    getAppliedJobOfUser: async (req, res) => {
        try {
            const id = req.candidate.id; 
            const jobs = await JobAppliedModel.findAll({where: {CandidateId: id}, include: [JobModel]} );
            res.json({
                messageType: "Success",
                message: "Got all applied jobs of a user successfully",
                jobs
            })
        } catch (error) {
            console.log("ERROR",error);
            res.json({
                messageType: "Error",
                message: "Internal Server Error",
                error,
            })
        }
      }
}
export default JobAppliedController