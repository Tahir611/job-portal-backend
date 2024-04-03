import Express from "express";
import allRoutes from "./routes/allRoutes.js";
import { dbCon } from "./db/config.js";
import dbInit from "./db/dbInit.js";

const app = Express();

app.use(Express.json());

dbCon();
dbInit().then(() => console.log("db synced")).catch((e) => console.log("ERROR", e));

app.use(allRoutes);


app.listen(5500, () => {
    console.log("server started");
})