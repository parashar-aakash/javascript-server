import * as express from 'express';
import TraineeController from './controller';
<<<<<<< HEAD
// import validationHandler from '../../libs/routes/validationHandler';
const traineeRoutes = express.Router();

traineeRoutes.route('/')
        .get(  TraineeController.get )
        .post( TraineeController.post )
        .put(  TraineeController.put )
        .delete( TraineeController.Delete );
=======
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { permissions, user } from '../../libs/routes/Constants';
const traineeRoutes = express.Router();

traineeRoutes.route( '/' )
        .get ( authMiddleWare ( permissions.getUsers, 'read' ), validationHandler( config.get ) , TraineeController.get )
        .post ( authMiddleWare ( permissions.getUser, 'write' ), validationHandler( config.create ) , TraineeController.post )
        .put ( authMiddleWare ( permissions.getUser, 'all' ), validationHandler( config.update ) , TraineeController.put )
        .delete ( authMiddleWare ( permissions.getUser, 'Delete' ), validationHandler( config.Delete ) , TraineeController.Delete );
>>>>>>> 648790ffa96c2dfd662ec58690188f13585e1acc

export default traineeRoutes;
