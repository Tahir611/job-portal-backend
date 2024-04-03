import CandidateAuthModel from "../models/auth/candidateAuthModel.js";
import EmployerAuthModel from "../models/auth/employerAuthModel.js";
import jobModel from "../models/employer/jobModel.js"

const dbInit = async () => {
    await jobModel.sync({
        alter: true,
        force: false
    });
    await CandidateAuthModel.sync({
        alter: true,
        force: false
    });
    await EmployerAuthModel.sync({
        alter: true,
        force: false
    })
}

export default dbInit;