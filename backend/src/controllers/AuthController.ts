import { Request, Response } from "express";
import Jwt from "jsonwebtoken";
import { Admin } from "../models/Admin";

class AuthController {
    public static async login(req: Request, res: Response) {
        try {
            const params = { login: req.body.login, senha: req.body.senha };
            const usuario = await Admin.findOne({
                where: params,
            });
            const errors = [];

            if (usuario === null) {
                errors.push("Usuário não encontrado");
            }

            if (req.body.senha == usuario?.dataValues.senha) {
                errors.push("Senha incorreta!");
            }

            if (errors.length > 0) {
                res.status(401).json({
                    error_messages: errors,
                });
            } else {
                const token = await Jwt.sign(
                    params.senha,
                    process.env.SECRET_KEY as string,
                    { expiresIn: "1h" },
                );

                res.status(200).json({
                    token: token,
                });
            }
        } catch (err) {
            res.status(500).json({
                error_message: "Houve um error interno ao realizar login!",
                error: err,
            });
        }
    }
}

export { AuthController };
