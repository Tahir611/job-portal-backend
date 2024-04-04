import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import CandidateAuthModel from "../auth/candidateAuthModel.js";
import JobModel from "../employer/jobModel.js";

const JobAppliedModel = sequelize.define("JobApplied",{
    applicationStatus: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    resume:{
        type:DataTypes.STRING(),
        allowNull: true
    }

},{
    timestamps: true,
});
JobAppliedModel.belongsTo(CandidateAuthModel);
CandidateAuthModel.hasMany(JobAppliedModel);

JobAppliedModel.belongsTo(JobModel);
JobModel.hasMany(JobAppliedModel);


export default JobAppliedModel;