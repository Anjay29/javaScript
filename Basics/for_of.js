// const arr = [1,2,3,4,5,6];

// for (const it of arr) {
//     console.log(it);
// }


//  Maps --->
const map = new Map();  // map is an object
map.set('IN', 'India');
map.set('Fr','France');
map.set('US','United States of America');

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// for (const [key] of map) {
//     console.log(key);
// }

// for (const [key,value] of map) {
//     console.log(key+" :- "+value);
// }


// object  ---> can't use for of loop can use for in
const myObj = {
    js : "JavaScript",
    nfs : "Need for Speed",
    abc : "ABCDEFG"
}

// for (const key in myObj) {
//     console.log(key);
// }

// for (const key in myObj) {
//     console.log(`${key} :- ${myObj[key]}`);
// }


// for each----------------->

const coding = ["java","cpp","ruby","swift"];
// three parameter iterator, index, array
coding.forEach((items)=>{
    console.log(items);
})

coding.forEach((items, idx, arr)=>{
    console.log(items,idx,arr);
})
