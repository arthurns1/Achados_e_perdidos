import { NextFunction, Request, Response } from "express";
import * as Yup from "yup";

const itemSchema = Yup.object({
    id_item: Yup.number(),
    dono: Yup.string().min(15).max(15),
    nome: Yup.string().required().max(100),
    foto: Yup.string().max(255),
    data_criacao: Yup.date(),
});

export async function validateItem(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        await itemSchema.validate(req.body);

        next();
    } catch (err) {
        const errors = err as Yup.ValidationError;

        res.status(400).json({
            error_message: "",
            error: errors.errors,
        });
    }
}
