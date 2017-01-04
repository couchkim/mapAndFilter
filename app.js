console.log("Reinventing map");

let shoes = [20, 30, 50, 70];

function map(data, func) {
    
    for(let i = 0; i < data.length; i++){
        data[i]=func(data[i]);
        
    }
return data;
} 

function discount(data){
    return data * .80;
}

console.log(map(shoes, discount));


console.log("Reinventing filter");


function filter(data, func) {
    
    for(let i = 0; i < data.length; i++){
        if (func(data[i]) ===false){
            let index = data.indexOf(data[i]);    
            data.splice(index, 1)
        }
        return data
    }
}

    function addFive(n) {
   return n + 5;
}

function square(n) {
  return n * n;
}

function greaterThanEleven(n) {
   return n > 11;
}


console.log(map([7, 1, 5, 2], addFive));                  // [12, 6, 10, 7]
console.log(map([6, 3, 15, 4], addFive));                 // [11, 8, 20, 9]
console.log(map([6, 3, 15, 4], square));                  // [36, 9, 225, 16]
console.log(filter([7, 21, 45, 102], greaterThanEleven)); // [21, 45, 102]
console.log(map([7, 21, 45, 102], greaterThanEleven));    // [false, true, true, true]


console.log("Contains Vowel");

function isVowel(letter){
    // if (letter === 'a'||letter === "e" || letter === 
    // 'i'|| letter === "o" || letter === "u"){
      if(['a', 'e', 'i', 'o', 'u'].includes(letter)){
        return true;
    }else{
        return false;
    }
}


function containsVowel(word){
    let letters = word.split('');

    return letters.filter(isVowel).length > 0;
}
console.log(containsVowel('hey'));

console.log("Divisors");





console.log("Multiples");

function range(min, max) {
  let arr = [];
  
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  
  return arr;
}  


function multiples(num1, num2){
    function modulus(current){
        return (current % num1 === 0) && (current % num2 === 0);
    }
    let nums = range(1, 100).filter(modulus);
    return nums;        
}

console.log(multiples(5, 7));

console.log("Boost");

function boost(num){
    function parse(digit){
        return parseInt(digit);
    }
    let digits = num.toString().split('');
    digits = digits.map(parse);
    console.log(digits);
    digits = digits.map(increment);
    digits = digits.join("");
    console.log(digits);
    return digits;
}


function increment(number){
    console.log(number);
    if (number !== 9){
        number = number + 1;
    }else{
        number = 0;
    }
    return number;
}

console.log(boost(368));