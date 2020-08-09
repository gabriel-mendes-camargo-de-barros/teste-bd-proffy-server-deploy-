import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

// Get: Buscar ou listar um informação
// Post: Criar alguma nova informação
// Put: Atualizar uma informação existente
// Delete: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um ServiceWorkerRegistration
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Pafinção, filtos, ordenação

routes.get('/classes', classesControllers.index); 
routes.post('/classes', classesControllers.create); 

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes;