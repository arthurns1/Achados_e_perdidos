import { config } from "dotenv";
import { Server } from "./server/server";
import { sequelize } from "./database/conn";

config();

const port = process.env.PORT || 8081;

Server.listen(port, () => {
    console.log(`Servidor lançado com sucesso: http://localhost:${port}/`);
});
