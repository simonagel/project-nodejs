const Joi = require('@hapi/joi');

const regSchema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    eMail: Joi.string().required()
});

module.exports = regSchema;