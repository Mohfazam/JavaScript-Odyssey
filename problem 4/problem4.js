// 4. Write a function to capitalize the first letter of each word in a string.

function capital(str){
    let result = str.charAt(0).toUpperCase();

    for(let i = 1; i < str.length; i++){
        if(str[i-1] === ' '){
            result += str[i].toUpperCase();
        }
        else{
            result += str[i];
        }
    }

    return result;
}

let x = prompt("Enter a string : ");

let ans = capital(x);

alert(ans);
