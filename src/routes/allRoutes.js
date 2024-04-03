import { Router } from "express";
import jobRouter from "./employer/jobRoute.js";
import EmplAuthRoute from "./auth/EmployerAuthRoute.js";
import CandAuthRoute from "./auth/candidateAuthRoute.js";
import jobAppliedRoute from "./candidate/jobAppliedRoute.js";

const allRoutes = Router();

allRoutes.use(jobRouter);
allRoutes.use(EmplAuthRoute);
allRoutes.use(CandAuthRoute);
allRoutes.use(jobAppliedRoute)

export default allRoutes;