import validateEmail from './helper';
export default function validateUsers( user: IUsers [] ) {
let valid: number = 0 ;
let invalid: number = 0 ;

user.forEach( ( { traineeEmail , reviewerEmail } )  => {

if ( validateEmail ( reviewerEmail ) && validateEmail( traineeEmail ) ) {
valid++;
console.log( 'Valid User : ', traineeEmail , reviewerEmail ) ;
}
else {
invalid++ ;
console.log( 'Invalid User : ', traineeEmail , reviewerEmail ) ;
}
}) ;
console.log( 'Valid Users Count : ' , valid ) ;
console.log( 'Invalid Users Count : ' , invalid ) ;

}

// validateUsers(user);