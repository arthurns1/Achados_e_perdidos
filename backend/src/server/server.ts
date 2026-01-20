import Express from "express";
import { admin } from "../routes/admin";
import { item } from "../routes/item";
import { login } from "../routes/login";
import cors from "cors";
import path from "path";

const Server = Express();

Server.use(
    cors({
        origin: "*",
        credentials: true,
    }),
);

Server.use("/upload", Express.static(path.resolve("upload")));

Server.get("/", (req, res) => {
    res.send("Test");
});

Server.use(Express.json());
Server.use("/item", item);
Server.use("/admin", admin);
Server.use(login);

export { Server };
