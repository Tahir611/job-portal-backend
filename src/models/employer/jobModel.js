import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import EmployerAuthModel from "../auth/employerAuthModel.js";

const JobModel = sequelize.define("Jobs",{
    jobTitle: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    company: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    location: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    jobType: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    industry: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    experienceRequired: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    educationRequired: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    companyDescription: {
        type: DataTypes.STRING(2200),
        allowNull: false
    },
    jobDescription: {
        type: DataTypes.STRING(2200),
        allowNull: false
    }
},{
    timestamps: true,
});
JobModel.belongsTo(EmployerAuthModel);
EmployerAuthModel.hasMany(JobModel);

export default JobModel;