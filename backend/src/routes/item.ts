import { Router } from "express";
import { ControllerItens } from "../controllers/controllerItens";

const item = Router();

item.get("/get_all", ControllerItens.get_all);
item.get("/get_by_id/:id_item", ControllerItens.get_by_id_item);
item.post("/create", ControllerItens.create);
item.put("/update/:id_item", ControllerItens.update_by_id_item);
item.delete("/delete/:id_item", ControllerItens.delete_by_id_item);

export { item };
