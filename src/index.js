import express from 'express';
import ejs from 'ejs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from './routes/routes.js'
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

// constantes
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

// configuración
app.set('views', join(__dirname,'views'))
app.set('view engine', 'ejs');

// middlewares
app.use(indexRoutes);
app.use(express.static(join(__dirname, 'public')));
app.use('/modules', express.static(join(__dirname, '../node_modules')));

// Despliegue
app.listen(port, () => console.log(`Escuchando el puerto ${port}`));