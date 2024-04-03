import { Sequelize } from "sequelize";
import "dotenv/config";
const env = process.env;

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
    host: env.DB_HOST,
    dialect: env.DB_DIALECT
});

const dbCon = async () => {
    try{
        await sequelize.authenticate();
        console.log("Connection has been established successfully.")
    } catch(error){
        console.log("Unable to connect to the database:" , error);
    }
}

export default sequelize;
export {dbCon};