// primitiva datatype => int,boolean,string,null,undefine,bigint
// non-primivite => array, function, object

// primitive use stack memory
// non - primitive use heap memory

// example

// primitive
let myNameOne = "Anjay";
let myNameTwo = myNameOne;

myNameTwo = "Ashish";
console.log(myNameOne);
console.log(myNameTwo);

// non-primitive
const userOne = {name:"Anjay", age:"20", location:"Kurukshetra"};
const userTwo = userOne;

userTwo.age = 18;
console.log(userOne.age);
console.log(userTwo.age);