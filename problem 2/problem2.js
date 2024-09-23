// 2. Create a program to find the largest of three numbers.


// let n = 3;
// let arr = [n];

// arr[0] = parseInt(prompt("Enter the first value : "));
// arr[1] = parseInt(prompt("Enter the second value : "));
// arr[2] = parseInt(prompt("Enter the third number : "));


// let max1 = -Infinity;

// let max2 = -Infinity;

// let max3 = -Infinity;

// for(let i = 0; i < n; i++){
//     if(arr[i] > max1){
//         max3 = max2;
//         max2 = max1;
//         max1 = arr[i];
//     }
//     else if(arr[i] > max2 && arr[i] < max1){
//         max3 = max2;
//         max2 = arr[i];
//     }
//     else if(arr[i] > max3 && arr[i] < max2){
//         max3 = arr[i];
//     }
// }


// alert("The largest among three numbers is : " + max1);



// more optimal

let a = parseInt(prompt("Enter the first number : "));
let b = parseInt(prompt("Enter the second number : "));
let c = parseInt(prompt("Enter the third number : "));

let result = Math.max(a,b,c);

alert("The largest Among three numbers is : " + result);
