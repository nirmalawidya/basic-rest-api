import { NextFunction, Request, Response } from "express";
import Joi from "joi"

const schemaAdmin = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(5).required()
})
const createValidation = async (
    req: Request, res: Response,
    next: NextFunction) => {

    const validation = schemaAdmin.validate(req.body)
    if (validation.error) {
        return res
            .status(400)
            .json({
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
    email: Joi.string().optional(),
    password: Joi.string().min(5).optional()
})

const updateValidation = async (
    req: Request, res: Response,
    next: NextFunction) => {

    const validation = updateScheme.validate(req.body)
    if (validation.error) {
        return res
            .status(400)
            .json({
                message: validation
                    .error
                    .details
                    .map(item => item.message).join()
            })
    }
    return next()
}

const authSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

const authValidation = async (
    req: Request, res: Response,
    next: NextFunction) => {

    const validation = authSchema .validate(req.body)
    if (validation.error) {
        return res
            .status(400)
            .json({
                message: validation
                    .error
                    .details
                    .map(item => item.message).join()
            })
    }
    return next()
}
export { createValidation, updateValidation, authValidation }