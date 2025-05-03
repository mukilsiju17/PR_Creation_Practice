import e, { Router } from "express";
import { InsertNewUser, GetAllUsers, updateUser, deleteUser} from "./controller";

const route = Router();

route.post("/insert", InsertNewUser);
route.get("/fetch", GetAllUsers);
route.put("/update/:Id", updateUser);
route.delete("/delete/:Id", deleteUser);



export default route;

// Promise<Response | void>