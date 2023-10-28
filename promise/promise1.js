// const promiseOne = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Async task is completed')
//         resolve();
//     },1500);
// })

// promiseOne.then(() => {
//     console.log("Promise Consumed");
// })


// new Promise((resolve,reject)=>{
//    setTimeout(() => {
//     console.log("Async task 2 completed");
//     resolve();
//    }, 5000);
// }).then(()=>{
//     console.log("Promise is consumed");
// })


// we can pass the parameter in resolve
// const PromiseThree = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({userName : "Anjay", Email : "abc@gmail.com"});
//     },2000)
// })

// PromiseThree.then((user)=>{
//     console.log(user);
// })

// // Promise four
// const Promisefour = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({userName:"Anjay",Email:"abc@mail.com"});
//         }
//         else{
//             reject("Error: Something went wrong");
//         }
//     }, 2000);
// })

// Promisefour.then((user)=>{
//     console.log(user);
//     console.log(user.userName);
//     return user.userName;
// }).then((usename)=>{
//     console.log(usename);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Promise is either resolve or rejected");
// })



// Promise Five using Async and await
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({userName : "JavaScript", Email : "abc@mail.com"})
        }
        else{
            reject("Error : Something Went wrong");
        }
    }, 2000);
})

// async alway handle resolve, not the  reject 
const consumedPromiseFive = async () =>{
    try {
        const response = await promiseFive;
        console.log(response);
        console.log(response.Email);
    } catch (error) {
        console.log(error);
    }
}

consumedPromiseFive();