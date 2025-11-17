import { NextFunction, Request, Response } from "express";
import * as Yup from "yup";

const adminSchema = Yup.object({
    login: Yup.string().required().min(3).max(30),
    senha: Yup.string().required().min(1).max(30),
});

export async function validateAdmin(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        await adminSchema.validate(req.body);

        next();
    } catch (err) {
        const errors = err as Yup.ValidationError;

        res.status(400).json({
            error_message: "",
            error: errors.errors,
        });
    }
}
