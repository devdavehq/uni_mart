import { Router } from "express";
import login from "./login.js"

const route = Router()

route.use(login)


export default route