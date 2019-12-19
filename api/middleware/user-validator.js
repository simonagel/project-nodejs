const Joi = require('@hapi/joi');

const regUserValidator = async (req, res, next) => {

    const userSchema = Joi.object().keys({
        firstName: Joi.string().required()
                        .min(3).max(50),
        lastName: Joi.string().required()
                        .min(3).max(50),
        eMail: Joi.string().required()
                    .email()
                    .min(3)
                    .max(50),
        role: Joi.string().valid("a","l","s").required(),
        isActive: Joi.string().valid("1", "2").default("1"),
        passw: Joi.string().required().length(8).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        
    });

    //console.log(userSchema);
    try{
        await userSchema.validateAsync(req.body);
       
    }catch(error){
        return res.status(400).json({error:error.details[0].message});
    }
    next();
}

module.exports = regUserValidator;