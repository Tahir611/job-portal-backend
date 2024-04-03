import JobAppliedModel from "../../models/candidate/jobAppliedModel.js";

const JobAppliedController = {
    applyJob:async(req,res)=>{
        try {

            const {jobId} = req.params;
            const application = await JobAppliedModel.findOne({where:{JobId:jobId,CandidateId:req.candidate.id}})
            if(application){
                return res.json({message:"Already Applied for this job"})
            }
            await JobAppliedModel.create({JobId:jobId,CandidateId:req.candidate.id,applicationStatus:"applied"})
            
            return res.json({message:`Candidate with id ${req.candidate.id} Applied for the job with id ${jobId} sucessfully`})
        } catch (error) {
            console.log("ERROR",error);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    }
}
export default JobAppliedController