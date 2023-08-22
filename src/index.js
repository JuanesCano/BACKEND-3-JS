import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connectDB } from './database.js';
import { dirname } from "path";
import { fileURLToPath } from "url";

import postRoutes from "./routes/postRoute.js";

connectDB();
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express();

app.set('port', 1000);
app.use("/public", express.static(__dirname + "/storage/imgs"))
app.use(morgan('dev'));
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/post", postRoutes);

app.listen(app.get('port'), () => {console.log('servidor escuchando por el puerto', app.get('port'));});
