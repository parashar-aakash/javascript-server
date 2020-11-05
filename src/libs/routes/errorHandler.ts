<<<<<<< HEAD
import { Request , Response , NextFunction } from 'express';

export default ( err , req: Request , res: Response , next: NextFunction ) => {
    console.log ( `Error is ${ err.err }` );
    res.send( {
        'error': err.err,
        'message': err.code,
        'status': err.message || 'Error',
        timeStamp: new Date()
=======
import { Request, Response, NextFunction } from 'express';

export default ( err, req: Request , res: Response , next: NextFunction ) => {
    console.log(`Error is ${err.err}`);
    res.send({
        'error' : err.err,
        'message' : err.code,
        'status' : err.message || 'Error',
        timeStamp : new Date()
>>>>>>> 648790ffa96c2dfd662ec58690188f13585e1acc
    });
};
