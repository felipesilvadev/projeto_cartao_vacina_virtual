import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import VacinaController from './app/controllers/VacinaController';
import AgendamentoController from './app/controllers/AgendamentoController';
import MinistramentoController from './app/controllers/MinistramentoController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/users', UserController.store);
routes.get('/users', UserController.findaAll);
routes.get('/users/:cns', UserController.find);
routes.put('/users', authMiddleware, UserController.update);
routes.put('/auth/:id', UserController.auth);
routes.delete('/users/:cns', UserController.delete);

routes.post('/vacinas', VacinaController.store);
routes.get('/vacinas/:faixa', VacinaController.find);
routes.put('/vacinas/:id', VacinaController.update);
routes.delete('/vacinas/:nome', VacinaController.delete);

routes.post('/agendamentos', authMiddleware, AgendamentoController.store);
routes.get('/agendamentos', authMiddleware, AgendamentoController.find);
routes.delete('/agendamentos/:id', AgendamentoController.delete);

routes.post('/ministramentos', authMiddleware, MinistramentoController.store);
routes.get('/ministramentos', authMiddleware, MinistramentoController.findAll);
routes.get('/ministramentos/:faixa', authMiddleware, MinistramentoController.find);

export default routes;
