// 5. Implement a function to count vowels in a given string.

function vowel(char){
    if(char === 'A' || char === 'E' || char === 'I' ||
       char === 'O' ||char === 'U' || char === 'a' ||
       char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        return 1;
    } 
    else{
        return 0;
    }

}



let count = 0;
let x = prompt("Enter a string : ");
x = x.split("");
for(let i = 0; i < x.length; i++){
    count += vowel(x[i]);
}

alert("The number of vowels is : " + count);