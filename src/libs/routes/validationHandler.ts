export default function(config){
    return function ( req , res , next ){
        const b = ( config.id.in[0] ) ; 
        console.log(typeof(b));
        // console.log(typeof(body));
        console.log('config is ' , req.body);
    }
}