const Joi = require("joi");

module.exports = {
  validationSchedule: (schedule) => {
    const schema = Joi.object({
      title: Joi.string().required().messages({
        "string.base": `Title should be a type of text`,
        "string.empty": `Title cannot be an empty field`,
        "any.required": `Title is a required field`,
      }),
      genre: Joi.string().required().messages({
        "string.base": `Genre should be a type of text`,
        "string.empty": `Genre cannot be an empty field`,
        "any.required": `Genre is a required field`,
      }),
      duration: Joi.string().required().messages({
        "string.base": `Duration should be a type of text`,
        "string.empty": `Duration cannot be an empty field`,
        "any.required": `Duration is a required field`,
      }),
      director: Joi.string().required().messages({
        "string.base": `Director should be a type of text`,
        "string.empty": `Director cannot be an empty field`,
        "any.required": `Director is a required field`,
      }),
      cast: Joi.string().required().messages({
        "string.base": `Casts should be a type of text`,
        "string.empty": `Casts cannot be an empty field`,
        "any.required": `Casts is a required field`,
      }),
      synopsis: Joi.string().required().messages({
        "string.base": `Synopsis should be a type of text`,
        "string.empty": `Synopsis cannot be an empty field`,
        "any.required": `Synopsis is a required field`,
      }),
      category: Joi.string().required().messages({
        "string.base": `Category should be a type of text`,
        "string.empty": `Category cannot be an empty field`,
        "any.required": `Category is a required field`,
      }),
      dateRealesed: Joi.date().required().messages({
        "date.base": `Realese date must be a valid date`,
        "date.empty": `Realese date cannot be an empty field`,
        "any.required": `Realese date is a required field`,
      }),
      dateSchedule: Joi.date().required().messages({
        "date.base": `Schedule date must be a valid date`,
        "date.empty": `Schedule date cannot be an empty field`,
        "any.required": `Schedule date is a required field`,
      }),
      cinema: Joi.array().required().messages({
        "number.base": `Cinema should be a type of array`,
        "number.empty": `Cinema cannot be an empty field`,
        "any.required": `Cinema is a required field`,
      }),
      city: Joi.number().required().messages({
        "number.base": `City should be a type of number`,
        "number.empty": `City cannot be an empty field`,
        "any.required": `City is a required field`,
      }),
      time: Joi.array().required().messages({
        "array.base": `Time should be a type of array`,
        "array.empty": `Time cannot be an empty field`,
        "any.required": `Time is a required field`,
      }),
      realesed: Joi.boolean().required().messages({
        "boolean.base": `Realese must be a true or false`,
        "boolean.empty": `Realese cannot be an empty field`,
        "any.required": `Realese is a required field`,
      }),
    });
    return schema.validate(schedule);
  },
  validationMovie: (movie) => {
    const schema = Joi.object({
      title: Joi.string().required().messages({
        "string.base": `Title should be a type of text`,
        "string.empty": `Title cannot be an empty field`,
        "any.required": `Title is a required field`,
      }),
      genre: Joi.string().required().messages({
        "string.base": `Genre should be a type of text`,
        "string.empty": `Genre cannot be an empty field`,
        "any.required": `Genre is a required field`,
      }),
      duration: Joi.string().required().messages({
        "string.base": `Duration should be a type of text`,
        "string.empty": `Duration cannot be an empty field`,
        "any.required": `Duration is a required field`,
      }),
      director: Joi.string().required().messages({
        "string.base": `Director should be a type of text`,
        "string.empty": `Director cannot be an empty field`,
        "any.required": `Director is a required field`,
      }),
      cast: Joi.string().required().messages({
        "string.base": `Casts should be a type of text`,
        "string.empty": `Casts cannot be an empty field`,
        "any.required": `Casts is a required field`,
      }),
      synopsis: Joi.string().required().messages({
        "string.base": `Synopsis should be a type of text`,
        "string.empty": `Synopsis cannot be an empty field`,
        "any.required": `Synopsis is a required field`,
      }),
      category: Joi.string().required().messages({
        "string.base": `Category should be a type of text`,
        "string.empty": `Category cannot be an empty field`,
        "any.required": `Category is a required field`,
      }),
      realesed: Joi.boolean().required().messages({
        "boolean.base": `Realese must be a true or false`,
        "boolean.empty": `Realese cannot be an empty field`,
        "any.required": `Realese is a required field`,
      }),
    });
    return schema.validate(movie);
  },
};
