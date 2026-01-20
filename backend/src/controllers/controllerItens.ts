import { NextFunction, Request, Response } from "express";
import { Item } from "../models/Item";
import sharp from "sharp";
import fs from "fs";

interface IItem {
    id_item: number;
    dono: string;
    nome: string;
    foto: string;
    data_criacao: Date;
}

class ControllerItens {
    static async create(
        req: Request<{}, {}, IItem>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const nomeArquivo = `item-${Date.now()}-${Math.round(Math.random() * 1e9)}`;

            const params = {
                id_item: req.body.id_item,
                dono: req.body.dono,
                nome: req.body.nome,
                foto: `${nomeArquivo}.jpeg`,
                data_criacao: req.body.data_criacao,
            };

            await sharp(req.file?.buffer)
                .resize(300, 300)
                .jpeg()
                .toFile(`upload/${nomeArquivo}.jpeg`);

            await Item.create(params);

            res.status(201).json({
                success_message: "Usuário criado com sucesso!",
                results: [],
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
            const itens = await Item.findAll({
                where: {
                    dono: null,
                },
            });

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

    static async get_by_id_item(req: Request, res: Response) {
        try {
            const params = {
                id_item: req.params.id_item,
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

    static async update_by_id_item(req: Request, res: Response) {
        try {
            const params = {
                id_item: req.params.id_item,
            };

            const item = await Item.update(req.body, { where: params });

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

    static async register_return(req: Request, res: Response) {
        try {
            console.log(req.body);

            const params = {
                id_item: req.params.id_item,
            };

            const item = await Item.update(
                { dono: req.body.dono },
                { where: params },
            );

            res.status(201).json({
                results: [],
                success_message: "Sucesso ao registrar devolução!",
            });
        } catch (err) {
            res.status(500).json({
                error_message: "Houve um erro interno ao registrar devolução!",
                error: err,
            });
        }
    }

    static async delete_by_id_item(req: Request, res: Response) {
        try {
            const params = {
                id_item: req.params.id_item,
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
