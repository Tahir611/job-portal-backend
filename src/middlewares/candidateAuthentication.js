import Jwt from "jsonwebtoken";
import { BLACKLIST } from "../controllers/auth/candidateAuth.js";

const CandidiateAuthenticateMiddleware = (req, res, next) => {
    const headers = req.headers;
    let token = headers.auhtorization;
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
        const candidateData = Jwt.verify(token, process.env.JWT_SIGNATURE);
        console.log("DECODE",candidateData);
        req.candidate = candidateData;
    } catch (error) {
        console.log("ERROR",error);
        return res
          .status(401)
          .json({ message: "Invalid token - please login again" });
    }
    next();

}

export default CandidiateAuthenticateMiddleware;