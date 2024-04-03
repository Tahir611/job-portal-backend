import Joi from "joi";
const JobValidator = {
    create: (req, res, next) => {
        const schema = Joi.object({
            jobTitle: Joi.string().min(3).max(100).required(),
            company: Joi.string().min(3).max(100).required(),
            location: Joi.string().min(3).max(200).required(),
            jobType: Joi.string().min(3).max(50).required(),
            industry: Joi.string().min(3).max(100),
            experienceRequired: Joi.string().max(50).required(),
            educationRequired: Joi.string().max(200).required(),
            companyDescription: Joi.string().min(3).max(2200).required(),
            jobDescription: Joi.string().min(3).max(2200).required(),
          });

          const response = schema.validate(req.body);
          if(response.error) {
            return res.status(400).json({
                message: "Bad Data",
                error: response.error
            });
          }
          next();
    },
    update: (req, res, next) => {
        const schema = Joi.object({
            jobTitle: Joi.string().min(3).max(100).required(),
            company: Joi.string().min(3).max(100).required(),
            location: Joi.string().min(3).max(200).required(),
            jobType: Joi.string().min(3).max(50).required(),
            industry: Joi.string().min(3).max(100),
            experienceRequired: Joi.string().max(50).required(),
            educationRequired: Joi.string().max(200).required(),
            companyDescription: Joi.string().min(3).max(2200).required(),
            jobDescription: Joi.string().min(3).max(2200).required(),
          });

          const response = schema.validate(req.body);
          if(response.error) {
            return res.status(400).json({
                message: "Bad Data",
                error: response.error
            });
          }
          next();
    }
};

export default JobValidator;