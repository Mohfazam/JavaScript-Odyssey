// 9. Check if a number is prime.
let n = parseInt(prompt("Enter a number"));

function isPrime(n){
    if(n <= 1){
        return false;
    }

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }

    return true;
}


if(isPrime(n)){
    alert("It's a prime number");
}
else{
    alert("It's not a prime numbe");
}