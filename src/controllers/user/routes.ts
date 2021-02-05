import * as express from 'express';
import UserController from './controller';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { permissions, user } from '../../libs/routes/Constants';
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation';
const UserRouter = express.Router();

UserRouter.route('/')
// .get( UserController.get)
.post(authMiddleWare ( permissions.getUsers, 'read' ), validationHandler ( config.create ), UserController.create )
.put(authMiddleWare ( permissions.getUsers, 'read' ), validationHandler ( config.update ), UserController.update );

UserRouter.route( '/:id' ).delete ( authMiddleWare ( permissions.getUsers, 'read' ), validationHandler ( config.delete ), UserController.remove );

UserRouter.route('/me')
.get(authMiddleWare ( permissions.getUsers, 'all' ), validationHandler ( config.get ), UserController.me);

UserRouter.route('/login')
.post( validationHandler ( config.login ) , UserController.login );

export default UserRouter;
