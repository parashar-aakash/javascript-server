//object initializer/ object initialization
const obj1 = { a: 'foo', b: 42, c: {} };
console.log("Array Initialized")
console.log("obj1.a = " ,obj1.a);
console.log();

//Object.assign() method
console.log("Object.assign()");
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
console.log("Target : " ,target);
console.log();

const returnedTarget = Object.assign(target, source); //copied value from source to target

console.log("Target after copy : " ,target);
console.log("Returned Target : " ,returnedTarget);
console.log();

//Object.create() method
console.log("Object.create()");
const person = {
isHuman: false,
printIntroduction: function() {
console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
}
};

const me = Object.create(person); //create empty object.
console.log("me Object - " ,me); //created but not copied/ empty object.
me.name = 'Mohit';
me.isHuman = true;
console.log("me object after adding name and isHuman : ",me);
me.printIntroduction();
console.log();

//Object.defineProperty() method

console.log("Object.defineProperty()");
const object1 = {};

Object.defineProperty(object1, 'property1', {
value: 42,
writable: false
}); //define property to object1. writable false(don't update value), true(update value)

object1.property1 = 77; // Won't print as writable is set to false
console.log("object1.property1 : ",object1.property1);
console.log();

//Object.defineProperties() method

console.log("Object.defineProperties()");
const object2 = {};

Object.defineProperties(object2, {
property1: {
value: 55,
writable: false
},
property2: {
value: 55,
writable: true
}
});
object2.property1 = 69;
object2.property2 = 69;
console.log("object2.property1 : ",object2.property1);
console.log("object2.property2 : ",object2.property2);
console.log();

//Object.entries() method
console.log("Object.entries()");
const object3 = {
a: 'somestring',
b: 42
};
console.log("object3 : ",object3);
for (const [key, value] of Object.entries(object3)) {
console.log(`${key}: ${value}`);
} //show object into array(key,value) form

//Object.freeze() method
console.log("Object.freeze()");
const obj = {
prop: 17
};
console.log(obj);
Object.freeze(obj); //obj can't be changed now, once freeze
obj.prop = 33;
console.log("obj.prop : ",obj.prop);
console.log();

//Object.fromEntries() method
console.log("Object.fromEntries()");
const entries = new Map([
['foo', 'bar'],
['baz', 42]
]);
const object4 = Object.fromEntries(entries); //convert array into object(key:value) form
console.log("object4 : ",object4);
console.log();

//Object.getOwnPropertyDescriptor() method
console.log("Object.getOwnPropertyDiscriptor()");
const object5 = {
property1: 47
};

const descriptor1 = Object.getOwnPropertyDescriptor(object5, 'property1'); //tells description of property
console.log("object5 : ", object5);

console.log("descriptor1.configurable : ",descriptor1.configurable);
console.log("descriptor1.writable : ",descriptor1.writable);
console.log("descriptor1.value : ",descriptor1.value);
console.log();

//Object.getOwnPropertyDescriptors() method
console.log("Object.getOwnPropertyDescriptors()");
const object6 = {
property1: 42,
property2: 'hello'
};
console.log("object6 :" , object6);
const descriptors1 = Object.getOwnPropertyDescriptors(object6);
const descriptors2 = Object.getOwnPropertyDescriptors(object6);
console.log("descriptors1.property1.writable : ",descriptors1.property1.writable);
console.log("descriptors1.property1.value :",descriptors1.property1.writable);
console.log("descriptors2.property2.writable :",descriptors2.property2.value);
console.log("descriptors2.property2.writable : ",descriptors2.property2.writable);
console.log();