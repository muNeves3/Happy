import { Router } from 'express'
import multer from 'multer';
import OrphanagesController from './controllers/OrphanagesController';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);
//MVC 
//Model - Representatividade de um dado na aplicação
//Views - Como as coisas são visualizadas, ficam disponiveis para o front-end
//Controllers - Onde fica a lógica das rotas

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'),OrphanagesController.create);

export default routes;