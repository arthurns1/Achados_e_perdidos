import { DataTypes, DATE, Model } from "sequelize";
import { sequelize } from "../database/conn";
import { Admin } from "./Admin";

class Item extends Model {}

Item.init(
    {
        id_item: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        dono: {
            type: DataTypes.STRING,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        foto: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        data_criacao: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
        },
    },
    {
        sequelize,
        timestamps: false,
        tableName: "itens",
    },
);

export { Item };
