import { NextFunction, Request, Response } from "express"
import Joi from "joi"

/** create a rule/schema
 * for add new medicine */
const createScheme = Joi.object({
    name: Joi.string().required(),
    stock: Joi.number().min(0).required(),
    price: Joi.number().min(1).required(),
    exp_date: Joi.date().required(),
    type: Joi.string().valid("Syrup", "Tablet", "Powder").required()
})

const createValidation = async(
        req: Request, res: Response,
        next: NextFunction) => {
    
        /** check an error of validation */
        const validation = createScheme.validate(req.body)
        if (validation.error) {
            // 400: Bad request
            return res.status(400).json({
                message: validation
                    .error
                    .details
                    .map(item => item.message).join()
            })
        }
         return next()
    }

    const updateScheme = Joi.object({
        name: Joi.string().optional(),
        stock: Joi.number().min(0).optional(),
        price: Joi.number().min(1).optional(),
        exp_date: Joi.date().optional(),
        type: Joi.string().valid("Syrup", "Tablet", "Powder").optional()
    })
    
    const updateValidation = async(
            req: Request, res: Response,
            next: NextFunction) => {
        
            /** check an error of validation */
            const validation = updateScheme.validate(req.body)
            if (validation.error) {
                // 400: Bad request
                return res.status(400).json({
                    message: validation
                        .error
                        .details
                        .map(item => item.message).join()
                })
            }
             return next()
    }

export {createValidation, updateValidation}