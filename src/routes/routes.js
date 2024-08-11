import { Router } from 'express';
import { renderHome, renderAbout } from '../controllers/mainController.js';
//IMPORTAR PROYECTOS-------
import { quotesProject } from '../controllers/projects/_quoteProjectController.js';
//-------------------------
const router = Router();

router.get('/', renderHome);
router.get('/acercade', renderAbout);

//RUTAS PROYECTOS----------
router.get('/quotes', quotesProject);
//-------------------------

export default router;