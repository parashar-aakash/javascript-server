const validation = ( config ) => { ( req , res , next ) => {
        console.log(Object.keys(config));
        console.log(typeof(Object.keys(config)));
        console.log(Object.keys(req.body));

        console.log('body is' , Object.keys(req.body).length);
        console.log('query',Object.keys(req.query).length);
        // console.log();
        const a = ( config.name.in[0] === 'body' );
        const b = check( req.body );
        if( a && b ) {
            console.log( 'working' );
        }
        else{
            console.log('Not Validated');
        }
        next();
    }

}

export default validation;

function check(params) {
     if(Object.keys(params).length) return false  ;
}