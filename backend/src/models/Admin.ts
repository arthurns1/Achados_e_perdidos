import { sequelize } from "../database/conn";
import { DataTypes, Model } from "sequelize";
import { Item } from "./Item";

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
    },
);

export { Admin };
