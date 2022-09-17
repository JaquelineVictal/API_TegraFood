const { validate, Joi } = require('express-validation')

module.exports = validate({
    body: Joi.object({
        title: Joi.string().required(),
        price: Joi.number().required(),
        description: Joi.string().required(),
        image: Joi.string().required(),
        category: Joi.string().required()
    })
})

