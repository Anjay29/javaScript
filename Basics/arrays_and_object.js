const arr1 = [1,2,3,4,[5,6,7]];
// console.log(arr1);

const arr2 = arr1.flat();
// console.log(arr2);

// const name = "Anjay";
// console.log(Array.from(name));


// -------objects
// singleton object
const singletonObj = new Object();

// not Singleton
const notSingletonObj = {};

const sym = Symbol("key1");

const jsUser = {
    name : "Anjay",
    Email : "anjay@google.com",
    age : 20,
    [sym] : "Key2",
    "Full Name" : "Anjay Kumar",
    location : "Rewari",
    isloggedIn : false,
    loggedIn : ["Monday", "Wednesday", "Saturday"]
}


// console.log(jsUser.name);  //this is worng way to access

// console.log(jsUser["name"]); //this is right way
// console.log(jsUser["Full Name"]);
// console.log(jsUser[sym]);

// console.log(jsUser);

// ----concatenate of object

const obj1 = {name:"Anjay", age : "20"};
const obj2 = {Name : "Ashish", Age : "21"};

const obj3 = {...obj1,...obj2};
// console.log(obj3);

// console.log(Object.keys(obj3)); //return array 
// console.log(Object.values(obj3)); //return array 
// console.log(Object.entries(obj3)); //return array of array key,value pair

// -----------Destructuring
const {name} = obj3; 
console.log(name); 

const course = {
    name : "JavaScript",
    price : 99,
    couseMentor : "Code With Chai"
}

// const {name} = course;

// console.log(name);


