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


// console.log(map([7, 1, 5, 2], addFive));                  // [12, 6, 10, 7]
// console.log(map([6, 3, 15, 4], addFive));                 // [11, 8, 20, 9]
// console.log(map([6, 3, 15, 4], square));                  // [36, 9, 225, 16]
console.log(filter([7, 21, 45, 102], greaterThanEleven)); // [21, 45, 102]
// console.log(map([7, 21, 45, 102], greaterThanEleven));    // [false, true, true, true]
