import { sequelize } from "../database/conn.js";
import { DataTypes, Model } from "sequelize";
import { Item } from "./Item.js";

class Admin extends Model {}

Admin.init(
    {
        login: {
            type: DataTypes.STRING(30),
            primaryKey: true,
            allowNull: false,
        },
        senha: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        tableName: "admins",
        modelName: "admin",
    },
);

Admin.belongsToMany(Item, {
    through: "admins_itens",
    foreignKey: "login",
});

export { Admin };
