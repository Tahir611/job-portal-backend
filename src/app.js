import Express from "express";
import allRoutes from "./routes/allRoutes.js";
import { dbCon } from "./db/config.js";
import dbInit from "./db/dbInit.js";
import cors from "cors";

const app = Express();
app.use(cors());
app.use(Express.json());

dbCon();
dbInit().then(() => console.log("db synced")).catch((e) => console.log("ERROR", e));

app.use(allRoutes);


app.listen(5500, () => {
    console.log("server started");
})