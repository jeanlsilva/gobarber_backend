import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

// Rota: Receber a requsição, chamar outro arquivo, devolver uma resposta

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({ email, password });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
