import Express from "express";

const Server = Express();

Server.get("/", (req, res) => {
    res.send("Test");
});

Server.use(Express.json());

export { Server };
