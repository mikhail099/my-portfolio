function greet(name){
   // console.log("Hello," + name)
}
greet("Alice");
function multiply(a,b){
    return a*b;
}
//console.log( multiply(3,4));
function findMax(a,b,c){
    return Math.max(a,b,c);
}
//console.log(findMax(4,7,3))
function reverseString(str){
    return str.split("").reverse().join(" ");
}
//console.log(reverseString("hello"))
function countVowels(str){
    let count=0
    let vowels = "aeiouAEIOU";

    for (let char of str){
        if (vowels.includes(char)){
            count++;
        }
    }
    return count
}
//console.log(countVowels("education"))
function celsiusToFahrenheit(celsius){
    return(celsius*9/5) + 32
}
//console.log(celsiusToFahrenheit(25))
function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1))
    +min;
}
console.log(getRandomNumber(1,10))