// 7. Create a function that returns the factorial of a number.

function fact(x){
    if(x == 1 || x == 0){
        return 1;
    }

    return x*fact(x-1);
}

let x = Number(prompt("Enter a number:"));

console.log(`The factorial of the number ${x} is: `);

for(let i = 0; i <= x; i++){
    console.log(`The factorial of ${i} is: ${fact(i)}`);
}