import  express  from "express";
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';

import homeroute from './router/homeRouter.js'

const app = express();
dotenv.config()
const PORT = parseInt(process.env.PORT || "3000", 10);
const HOSTNAME = "127.0.0.1";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static('public'));


app.use('/', homeroute)

app.listen(PORT, HOSTNAME, ()=>{
    console.log(`Server is listening to ${HOSTNAME}:${PORT}`)
});