import { DataTypes, DATE, Model } from "sequelize";
import { sequelize } from "../database/conn.js";
import { Admin } from "./Admin.js";

class Item extends Model {}

Item.init(
    {
        id_item: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            allowNull: false,
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
    },
);

Item.belongsToMany(Admin, {
    through: "admins_itens",
    foreignKey: "id_item",
});

export { Item };
