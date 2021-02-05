import { traineeRoutes } from './controllers/trainee';
import { userRouter } from './controllers/user';
import { Router } from 'express';

const mainRouter = Router();

mainRouter.use( '/trainee' , traineeRoutes );
mainRouter.use( '/user' , userRouter );

export default mainRouter;
