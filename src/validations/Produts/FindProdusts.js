const { validate, Joi } = require('express-validation')

module.exports = validate({
    query: Joi.object({
        page: Joi.number().required(),
        order: Joi.string().optional(),
        filter: Joi.string().optional(),
        category: Joi.string().optional(),
        max:  Joi.number().optional(),
        min: Joi.number().optional()
      })
})
