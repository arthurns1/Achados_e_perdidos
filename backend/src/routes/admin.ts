import { Router } from "express";
import { ControllerAdmins } from "../controllers/controllerAdmins";

const admin = Router();

admin.get("/get_all", ControllerAdmins.get_all);
admin.get("/get_by_login/:login", ControllerAdmins.get_by_login);
admin.post("/create", ControllerAdmins.create);
admin.put("/update/:login", ControllerAdmins.update_by_login);
admin.delete("/delete/:login", ControllerAdmins.delete_by_login);

export { admin };
