import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";

async function check_login(req: Request, res: Response, next: NextFunction) {
    try {
        console.log(req.headers.authorization);
        await Jwt.verify(
            req.headers.authorization as string,
            process.env.SECRET_KEY as string,
        );

        next();
    } catch (err) {
        res.status(401).json({
            error_message: "Acesso negado!",
            error: err,
        });
    }
}

export { check_login };
