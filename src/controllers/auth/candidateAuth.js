import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import CandidateAuthModel from "../../models/auth/candidateAuthModel.js";

const BLACKLIST = new Set();
const CandidateAuthController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const candidate = await CandidateAuthModel.findOne({where: { email }});
      if (!candidate) {
        return res.status(404).json({
          messageType: "Error",
          message: "Candidate not found",
        });
      }

      const result = await bcrypt.compare(password, candidate.password);

      if (!result) {
        res.status(401).json({
          messageType: "Error",
          message: "Invalid Credentials",
        });
      }

      const id = candidate.id;
      const response = Jwt.sign(
        { id, email, password, userName: candidate.userName },
        process.env.JWT_SIGNATURE,
        { expiresIn: "40m" }
      );
      if(response.error) {
        return res.json({error: response.error});
      }
      res.json({
        messageType: "Success",
        message: "Login Successfully",
        response
      });
    } catch (error) {
        console.log("ERROR",error)
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  register: async (req, res) => {

    try {
        const payload = req.body;
        const saltRounds = 10;
        const hPassword = await bcrypt.hash(payload.password, saltRounds);
        const alreadyExist = await CandidateAuthModel.findOne({
            where: {email: payload.email}
        });
        if(alreadyExist) {
          return res.json({
            message: "This email already exists"
        });
        }

        const candidate = await CandidateAuthModel.create({
            name: payload.name,
            userName: payload.userName,
            email: payload.email,
            password: hPassword
        });
        res.json({
            messageType: "Success",
            message: "Candidate created Successfully",
            candidate
        });

    } catch (error) {
        console.log("ERROR",error);
        res.status(500).json({
            message: "Internal server error"
        })
    }
  },
  logout: (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if(token) {
            BLACKLIST.add(token);
            res.json({
                message: "Token revoked"
            });
        } else {
            res.status(400).json({
                message: "Token Not Provided"
            })
        }
    } catch (error) {
        console.log("ERROR",error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
  }
};

export default CandidateAuthController;
export {BLACKLIST};
