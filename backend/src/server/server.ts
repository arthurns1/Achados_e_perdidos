import Express from "express";
import { admin } from "../routes/admin";
import { item } from "../routes/item";
import { login } from "../routes/login";

const Server = Express();

Server.get("/", (req, res) => {
    res.send("Test");
});

Server.use(Express.json());
Server.use("/admin", admin);
Server.use("/item", item);
Server.use(login);

export { Server };
