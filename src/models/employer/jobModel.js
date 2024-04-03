import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const JobModel = sequelize.define("Jobs",{
    jobtile: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    company: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    location: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    jobType: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    industry: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    experienceRequired: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    educationRequired: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    companyDescription: {
        type: DataTypes.STRING(1000),
        allowNull: true
    },
    jobDescription: {
        type: DataTypes.JSONB,
        allowNull: false
    }
},{
    timestamps: true
});

export default JobModel;