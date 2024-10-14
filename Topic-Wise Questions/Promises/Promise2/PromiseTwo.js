// Promise:2. Write a function that returns a promise which resolves to the sum of two numbers. 

function asyncSum(a, b){
    let promise2 = new Promise(function(resolve, reject){
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        }
        else{
            reject(new Error("The input value should be Numbers"));
        }
    })

    return promise2;
}

asyncSum(5,50).then(function(message){
    console.log("The sum is : " + message);
}).catch(function(error){
    console.log(error);
});