import { Router } from "express";
import jobRouter from "./employer/jobRoute.js";
import EmplAuthRoute from "./auth/EmployerAuthRoute.js";
import CandAuthRoute from "./auth/candidateAuthRoute.js";

const allRoutes = Router();

allRoutes.use(jobRouter);
allRoutes.use(EmplAuthRoute);
allRoutes.use(CandAuthRoute);

export default allRoutes;