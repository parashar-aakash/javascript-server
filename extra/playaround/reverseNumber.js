const prompt = require(`prompt-sync`)();
let n = prompt(`Enter the number of terms: `);
let r=0;
console.log(`Input number is ${n}`);
while(n>0){
    let k=n%10;
    r=10*r + k;
    n=parseInt(n/10);
}
console.log(`Reversed Number is ${r}`);