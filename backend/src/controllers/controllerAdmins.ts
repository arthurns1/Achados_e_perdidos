import { Request, Response } from "express";
import { Admin } from "../models/Admin";

interface IAdmin {
    login: string;
    senha: string;
}

class ControllerAdmins {
    static async create(req: Request<{}, {}, IAdmin>, res: Response) {
        try {
            const params = {
                login: req.body.login,
                senha: req.body.senha,
            };

            await Admin.create(params);

            res.status(201).json({
                results: [],
                success_message: "Sucesso ao criar admin!",
            });
        } catch (err) {
            res.status(500).json({
                error_message: "Houve um erro interno ao criar admin!",
                error: err,
            });
        }
    }

    static async get_all(req: Request, res: Response) {
        try {
            const admins = await Admin.findAll();

            res.status(201).json({
                results: admins,
                success_message: "Sucesso ao retornar admins!",
            });
        } catch (err) {
            res.status(500).json({
                error_message: "Houve um erro interno ao retornar admins!",
                error: err,
            });
        }
    }

    static async get_by_login(req: Request, res: Response) {
        try {
            const params = {
                login: req.body.login,
            };

            const admin = await Admin.findOne({
                where: params,
            });

            res.status(201).json({
                results: admin,
                success_message: "Sucesso ao retornar admin!",
            });
        } catch (err) {
            res.status(500).json({
                error_message: "Houve um erro interno ao retornar admin!",
                error: err,
            });
        }
    }

    static async update_by_login(req: Request, res: Response) {
        try {
            const params = {
                login: req.body.login,
            };

            const admin = await Admin.update(req.body, { where: params });

            res.status(201).json({
                results: [],
                success_message: "Sucesso ao modificar admin!",
            });
        } catch (err) {
            res.status(500).json({
                error_message: "Houve um erro interno ao modificar admin!",
                error: err,
            });
        }
    }

    static async delete_by_login(req: Request, res: Response) {
        try {
            const params = {
                login: req.body.login,
            };

            const admin = await Admin.destroy({
                where: params,
            });

            res.status(201).json({
                results: [],
                success_message: "Sucesso ao remover admin!",
            });
        } catch (err) {
            res.status(500).json({
                error_message: "Houve um erro interno ao remover admin!",
                error: err,
            });
        }
    }
}

export { ControllerAdmins };
