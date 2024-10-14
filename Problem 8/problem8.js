// 8. Implement FizzBuzz: Print numbers 1-100, replacing multiples of 3 with "Fizz," multiples of 5 with "Buzz," and multiples of both with "FizzBuzz"

// approach 1:
// for(let i = 0; i <= 100; i++){
//     if(i % 3 == 0 && i != 0){
//         console.log("Fizz");
//         continue;
//     }
//     if(i % 5 == 0 && i != 0){
//         console.log("Buzz");
//         continue;
//     }
//     if(i % 5 == 0 && i % 3 == 0 && i != 0){
//         console.log("FizzBuzz");
//         continue;
//     }

//     console.log(i);
// }

// approach 2
for(let i = 0; i <= 100; i++){
    let output = "";
    if(1 % 3 === 0){
        output += "Fizz";
    }
    if(1 % 5 === 0){
        output += "Buzz";
    }
    if(1 % 5 === 0 && i % 3 === 0){
        output += "FizzBuzz";
    }

    console.log(output || i);
    
}