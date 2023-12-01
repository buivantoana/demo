import Joi from "joi";

export const validateProduct = Joi.object({
  name: Joi.string().required().min(3).max(200),
  price: Joi.number().required().min(0),
  desc: Joi.string().required().min(10),
});
