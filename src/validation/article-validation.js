import Joi from "joi";



const createArticleValidation = Joi.object({
  title: Joi.string().max(200).required(),
  content: Joi.string().required(),
  category: Joi.string().max(100).required(),
  tags: Joi.string().max(200).optional().allow(null, ""), 
  published: Joi.boolean().default(false),
});


const updateArticleValidation = Joi.object({
  title: Joi.string().max(200).optional(),
  content: Joi.string().optional(),
  category: Joi.string().max(100).optional(),
  tags: Joi.string().max(200).optional().allow(null, ""),
  published: Joi.boolean().optional(),
}).min(1);
