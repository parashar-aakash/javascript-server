import * as express from 'express';
import TraineeController from './controller';
import validationHandler from '../../libs/routes/validationHandler';
import validation from './validation';
const traineeRoutes = express.Router();

traineeRoutes.route('/')
        .get( validationHandler( validation.get ) , TraineeController.get )
        .post( validationHandler( validation.create ) , TraineeController.post )
        .put( validationHandler( validation.update ) , TraineeController.put )
        .delete( validationHandler( validation.Delete ) , TraineeController.Delete );

export default traineeRoutes;