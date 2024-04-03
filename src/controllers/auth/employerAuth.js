import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import EmployerAuthModel from "../../models/auth/employerAuthModel.js";

const BLACKLIST = new Set();
const EmployerAuthController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const employer = await EmployerAuthModel.findOne({ email, password });
      if (!employer) {
        return res.status(404).json({
          messageType: "Error",
          message: "Employer not found",
        });
      }

      const result = await bcrypt.compare(password, employer.password);

      if (!result) {
        res.status(401).json({
          messageType: "Error",
          message: "Invalid Credentials",
        });
      }

      const id = employer.id;
      const response = Jwt.sign(
        { id, email, password, userName },
        process.env.JWT_SIGNATURE,
        { expiresIn: "40m" }
      );
      response.error && res.json({error: response.error});
      res.json({
        messageType: "Success",
        message: "Login successfully",
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
        const alreadyExist = await EmployerAuthModel.findOne({
            where: {email: payload.email}
        });
        alreadyExist && res.json({
            message: "This email already exists"
        });

        const employer = EmployerAuthModel.create({
            name: payload.name,
            userName: payload.userName,
            email: payload.email,
            password: hPassword
        });
        res.json({
            messageType: "Success",
            message: "Employer created Successfully",
            employer
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

export default EmployerAuthController;
export {BLACKLIST};
