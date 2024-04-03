import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const EmployerAuthModel = sequelize.define(
    "Employer",
    {
        name: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(),
            allowNull: false
        }
    }
);

export default EmployerAuthModel;