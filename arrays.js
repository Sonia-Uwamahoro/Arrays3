// function that accepts an array of strings and console.logs each element using a for loop.

function petString(pets){
for(let pet of pets){
    console.log(pet);
}
}
pets = ["dogs", "cats", "rabbits", "birds", "fish"];
petString(pets);



// function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.

let numbers = [1,2,3,4,5,6,7,8,9,10];
function newArray() {
numbers.forEach(function(number){
    let multiplyNumbers;
    multiplyNumbers = (number * 2);
    number = multiplyNumbers;
    console.log(number)
   });
}
numbers = (newArray());



// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. 
// Console the array with the new values

let number = [1,2,3,4,5,6,7,8,9,10];
let newArrays = [];

function newNumber(number){
    for(i = 0; i < number.length; i++){
        if(i === 4){
            break;
        }
        newArrays .push(number[i]*8);
    }
    for(i = number.length -2; i < number.length; i++){
        if(i === number.length -2){
           
        }
        newArrays .push(number[i] + 5);
    }

    console.log(newArrays);
}
newNumber(number)


// Write a function that takes in the following array and use a while loop to iterate and break when 
// the item is equal to the fourth index
// let arrNum = [1,2,3,4,5,6,7,8,9];

let arrNum = [19,2,73,24,5,6,7,8,9];


function arrNumbers(arrNum){
let i = 0;
  while(i < arrNum.length){
    console.log(arrNum[i]);
    i++;
    if(i === 4){
        break;
      }
}
}
arrNumbers(arrNum);



// Write a function that takes in a an array of strings and use a continue statement when the item is 
// at the second index

let fruits= ['apple','plum','banana','strawberries','kiwi']

function fruitsArray(fruits){
    for(i = 0; i < fruits.length; i++){
        if(i === 2){
            continue;
        }
        console.log({"continue":fruits[i]}); // we want to skip 3 used for skipping that index
    }
}
fruitsArray(fruits);















