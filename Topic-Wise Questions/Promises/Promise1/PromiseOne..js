// Promise:1. Create a promise that resolves with a message after a 2-second delay. 

let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Promise resolved");
    }, 2000);
});

promise1.then(function(message){
    console.log(message);
})