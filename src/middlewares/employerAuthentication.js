import Jwt from "jsonwebtoken";
import { BLACKLIST } from "../controllers/auth/employerAuth.js";

const EmployerAuthenticateMiddleware = (req, res, next) => {
    const headers = req.headers;
    console.log(headers);
    let token = headers.authorization;
    console.log("TOKEN",token);
    token = token.split(" ");
    console.log("TOKEN",token);
    token = token[1];
    if(!token) {
        res.status(401).json({
            message: "Unauthorized: Token not provided"
        });
    };
    if(BLACKLIST.has(token)) {
        res.status(401).json({
            message: "Unauthorized: Token revoked"
        });
    };
    try {
        const employerData = Jwt.verify(token, process.env.JWT_SIGNATURE);
        console.log("DECODE",employerData);
        req.employer = employerData;
    } catch (error) {
        console.log("ERROR",error);
        return res
          .status(401)
          .json({ message: "Invalid token - please login again" });
    }
    next();

}

export default EmployerAuthenticateMiddleware;