import { Router } from "express";
import { ControllerAdmins } from "../controllers/controllerAdmins";
import { validateAdmin } from "../middlewares/validation/validateAdmin";

const admin = Router();

admin.get("/get_all", ControllerAdmins.get_all);
admin.get("/get_by_login/:login", ControllerAdmins.get_by_login);
admin.post("/create", validateAdmin, ControllerAdmins.create);
admin.put("/update/:login", validateAdmin, ControllerAdmins.update_by_login);
admin.delete("/delete/:login", ControllerAdmins.delete_by_login);

export { admin };
