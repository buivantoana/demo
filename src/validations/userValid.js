import Joi from "joi";
export const validateSignin = Joi.object({
  username: Joi.string().required().min(3),
  email: Joi.string().email(),
  password: Joi.string().required().min(6),
  confirmpassword: Joi.string().required().valid(Joi.ref("password")),
});

export const validateSignup = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().required().min(6),
});
