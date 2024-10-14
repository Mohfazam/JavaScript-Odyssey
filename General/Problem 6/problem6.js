// 6. Write a function to remove duplicates from an array.

let input = prompt("Enter Numbers : ");

let arr = input.split(' ').map(Number);

let unique = Array.from(new Set(arr));

alert(`The array without duplicates is ${unique}`);