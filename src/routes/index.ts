import { Router, Request, Response } from "express";
import team from "./teamns"
import match from './matches'

const routes = Router()

routes.use("/team", team);
routes.use("/match", match)

routes.use((req: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));

export default routes;