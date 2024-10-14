// Promise:1. Create a promise that resolves with a message after a 2-second delay. 

let promise1 = new Promise(function(resolve, reject){
    console.log("Promised resolved after 2 seconds");
}, setTimeout(resolve(), 2000));