import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const JobModel = sequelize.define("Jobs",{
    jobtile: {
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
        type: DataTypes.STRING(),
        allowNull: false
    },
    jobDescription: {
        type: DataTypes.STRING(),
        allowNull: false
    }
},{
    timestamps: true
});

export default JobModel;