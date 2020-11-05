<<<<<<< HEAD
import { Request , Response , NextFunction } from 'express';
=======
import { Request, Response, NextFunction } from 'express';
>>>>>>> 648790ffa96c2dfd662ec58690188f13585e1acc

export default ( req: Request , res: Response , next: NextFunction ) => {
    console.log( `first middleWare Working` ) ;
    next( {
        err : 'Not Found',
        code : 404
<<<<<<< HEAD
    } );
=======
    });
>>>>>>> 648790ffa96c2dfd662ec58690188f13585e1acc
};
