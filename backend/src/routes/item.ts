import { Router } from "express";
import { ControllerItens } from "../controllers/controllerItens";
import { validateItem } from "../middlewares/validation/validateItem";
import { upload } from "../services/upload";
import { check_login } from "../middlewares/validation/check_login";

const item = Router();

item.get("/get_all", ControllerItens.get_all);
item.get("/get_by_id/:id_item", ControllerItens.get_by_id_item);
item.post(
    "/create",
    check_login,
    upload.single("foto"),
    validateItem,
    ControllerItens.create,
);
item.put(
    "/register_return/:id_item",
    check_login,
    ControllerItens.register_return,
);
item.put("/update/:id_item", check_login, ControllerItens.update_by_id_item);
item.delete("/delete/:id_item", check_login, ControllerItens.delete_by_id_item);

export { item };
