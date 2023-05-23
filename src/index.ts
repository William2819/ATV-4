import * as express from "express";
import { Request } from "express";
import * as dotenv from "dotenv";
import routes from "./routes";
import * as cors from 'cors'

dotenv.config();

const app = express();

app.use(express.json()); 
app.use(cors<Request>());

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));

app.use(routes);
