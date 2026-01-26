import { Router } from "express";
import taskRouter from "../modules/tasks/routes.js";

const router=Router()

router.use("/" ,taskRouter)

export default router