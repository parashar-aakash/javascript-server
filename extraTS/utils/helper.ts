export default function validateEmail(Email){
    let  a =/^([a-zA-Z0-9+_.-])+@successive.tech+$/;
    let str=Boolean( Email.match(a));
    return str;
    }
    