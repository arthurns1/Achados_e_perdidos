import { Request, Response } from "express";
import { Item } from "../models/Item";

interface IItem {
    login: string;
    senha: string;
}

class ControllerItens {
    static async create(req: Request<{}, {}, IItem>, res: Response) {
        try {
            const params = {};

            await Item.create();

            res.status(201).json({
                results: [],
                success_message: "Sucesso ao adicionar item!",
            });
        } catch (err) {
            res.status(500).json({
                error_message: "Houve um erro interno ao adicionar item!",
                error: err,
            });
        }
    }

    static async get_all(req: Request, res: Response) {
        try {
            const itens = await Item.findAll();

            res.status(201).json({
                results: itens,
                success_message: "Sucesso ao retornar itens!",
            });
        } catch (err) {
            res.status(500).json({
                error_message: "Houve um erro interno ao retornar itens!",
                error: err,
            });
        }
    }

    static async get_by_login(req: Request, res: Response) {
        try {
            const params = {
                id_item: req.body.id_item,
            };

            const item = await Item.findOne({
                where: params,
            });

            res.status(201).json({
                results: item,
                success_message: "Sucesso ao retornar item!",
            });
        } catch (err) {
            res.status(500).json({
                error_message: "Houve um erro interno ao retornar item!",
                error: err,
            });
        }
    }

    static async update_by_login(req: Request, res: Response) {
        try {
            const params = {
                id_item: req.body.id_item,
            };

            const admin = await Item.update(req.body, { where: params });

            res.status(201).json({
                results: [],
                success_message: "Sucesso ao modificar item!",
            });
        } catch (err) {
            res.status(500).json({
                error_message: "Houve um erro interno ao modificar item!",
                error: err,
            });
        }
    }

    static async delete_by_login(req: Request, res: Response) {
        try {
            const params = {
                id_item: req.body.id_item,
            };

            const item = await Item.destroy({
                where: params,
            });

            res.status(201).json({
                results: [],
                success_message: "Sucesso ao remover item!",
            });
        } catch (err) {
            res.status(500).json({
                error_message: "Houve um erro interno ao remover item!",
                error: err,
            });
        }
    }
}

export { ControllerItens };
