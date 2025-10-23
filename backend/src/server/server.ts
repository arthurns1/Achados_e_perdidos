import Express from "express";
import { admin } from "../routes/admin";
import { item } from "../routes/item";

const Server = Express();

Server.get("/", (req, res) => {
    res.send("Test");
});

Server.use(Express.json());
Server.use("/admin", admin);
Server.use("/item", item);

export { Server };
