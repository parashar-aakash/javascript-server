const prompt = require(`prompt-sync`)();
let n = prompt(`Enter the number of terms: `);

fact = (n) => {
    if (n === 1)
        return 1;
    else {
        return n * fact(n - 1);
    }
}

let result = fact(n);

console.log(result);