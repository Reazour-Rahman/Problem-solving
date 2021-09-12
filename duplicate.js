let fruits = ['Orange', 'Mango', 'WaterMilos', 'Jackfruits', 'Banana', 'Orange', 'Banana', 'Pineapple', 'Mango', 'Banana', 'Guava', 'Apple', ];
// console.log(fruits);

// easy
const unique = [... new Set(fruits)];
// console.log(unique);

// for of loop

// program to remove duplicate value from an array

function getUnique(arr){
    
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = fruits;

// calling the function
// passing array argument
getUnique(array);