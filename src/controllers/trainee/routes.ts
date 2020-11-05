import * as express from 'express';
import TraineeController from './controller';
// import validationHandler from '../../libs/routes/validationHandler';
const traineeRoutes = express.Router();

traineeRoutes.route('/')
        .get(  TraineeController.get )
        .post( TraineeController.post )
        .put(  TraineeController.put )
        .delete( TraineeController.Delete );

export default traineeRoutes;
