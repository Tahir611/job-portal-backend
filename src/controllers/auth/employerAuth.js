import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import EmployerAuthModel from "../../models/auth/employerAuthModel.js";

const BLACKLIST = new Set();
const EmployerAuthController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const employer = await EmployerAuthModel.findOne({ where: { email } });
      if (!employer) {
        return res.status(404).json({
          messageType: "Error",
          message: "Employer not found",
        });
      }

      const result = await bcrypt.compare(password, employer.password);

      if (!result) {
        return res.status(401).json({
          messageType: "Error",
          message: "Invalid Credentials",
        });
      }

      const id = employer.id;
      const response = Jwt.sign(
        { id, email, password, userName: employer.userName },
        process.env.JWT_SIGNATURE,
        { expiresIn: "6h" }
      );
      if(response.error) {
        return  res.json({error: response.error});
      }
      return res.json({
        role: "Employer",
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
        const {name, userName, email, password} = req.body;
        const saltRounds = 10;
        const hPassword = await bcrypt.hash(password, saltRounds);
        const employerAlreadyExist = await EmployerAuthModel.findOne({
            where: {email}
        });
        if(employerAlreadyExist) {
          return res.json({
            message: "This email already exists"
          })
        }

        const employer = await EmployerAuthModel.create({
            name,
            userName,
            email,
            password: hPassword
        });
        return res.json({
            role: "Employer",
            messageType: "Success",
            message: "Employer created Successfully",
            employer
        });

    } catch (error) {
        console.log("ERROR",error);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
  },
  logout: (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if(token) {
            BLACKLIST.add(token);
            return res.json({
                message: "Token revoked"
            });
        } else {
            return res.status(400).json({
                message: "Token Not Provided"
            })
        }
    } catch (error) {
        console.log("ERROR",error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
  }
};

export default EmployerAuthController;
export {BLACKLIST};
