import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

const sequelize = new Sequelize({
    username: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    host: process.env.DB_HOST as string,
    database: process.env.DB as string,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",
});

sequelize
    .authenticate()
    .then(() => {
        console.log("Conexão estabelecida com sucesso!");
    })
    .catch((err) => {
        console.log("Houve um problema para estabelecer a conexão: " + err);
    });

export { sequelize };
