arr = [1,2,3,4,'aakash'];
console.log(`isArray value for ${arr} is ${Array.isArray(arr)}`);


let n=10;
arr.push(n);
console.log(`Array after Pushing ${n} is ${arr}`);


arr.pop(n);
console.log(`Array after Poping is ${arr}`);


// Concatinate Method  { Combines two array }
arr1=[34,32,54,23];
new_arr = arr.concat(arr1);
console.log(new_arr);

//CopyWithIn Method { Copies value from an array inside the same array based on the indexes given by us}
arr1 = arr1.copyWithin(0,1,2);
console.log(arr1);

//Entries Method { Gives the Index and value of elements of an array one by one }
i= arr1.entries();
console.log(`Index and Value of First Element is ${i.next().value}`);
console.log(`Index and Value of Second Element is ${i.next().value}`);


// Every Method { Returns a boolean value based on the result of our given condition}
const isPositive = (Value) => Value > 0;

console.log(`Are all the values in ${arr1} Positive , ${arr1.every(isPositive)}`);

//Filter Method  { It makes a new Array that satisfies your condition}
console.log("Filter Method");
result = arr1.filter(element=> element < 30);
console.log(result);

//Find Method 
console.log("Find Method");
console.log(arr1.find(element => element > 12));


//FindIndex Method 
console.log("Find Index Method");
console.log(arr1.findIndex(element => element > 12));

//Flat,indexOf,Join Method 
const ar = [0, 1, 2, [3, 4]];
console.log(`Flat of ${ar} is ${ar.flat()}`);
console.log(`Index of ${arr1[-1]} is ${arr1.indexOf(4)}`);
console.log(`Joining the array ${arr1} gives ${arr1.join('-')}`);

//Keys 
const it = arr1.keys();

for (const key of it) {
  console.log(key);
}

//Map Method
const ma = arr1.map(x => x * 2);

console.log(ma);

//Reverse
console.log(`Reverse of ${arr1} is`);
console.log( `${arr1.reverse()}`);


//Shift 

const firstElement = arr1.shift();
console.log(arr1);
console.log(`first element that is being removed is ${firstElement}`);


//Slice Method

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
console.log(animals.slice(2, 4));

//sort
console.log(`Initial/Unsorted array is ${arr1}`);
arr1.sort();
console.log(`Sorted array is ${arr1}`);

//Splice
console.log(`Initial array is ${arr1}`);
arr1.splice(1, 0, 1002);
console.log(`new array after adding new value is ${arr1}`);

//toString
console.log(`Converting ${arr1} array into srting gives`);
console.log(` ${arr1.toString()}`);

//Values
const iterator = arr1.values();
for (const value of iterator) {
  console.log(value);
}