//--------------------------------------------- Activity 1: Array Creation and Access ------------------------------------------------
//Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

const number_array = [1,2,3,4,5]
console.log(number_array);

//Task 2: Access first and last elements of the array and log the them to the console.

console.log(number_array[0] +' '+ number_array[4]);

//--------------------------------------------- Activity 2: Array Methods (Basic) ------------------------------------------------
//Task 3: Use the 'push' method to add a new number to the end of the array and log the updated array.

number_array.push(6);
console.log(number_array);

//Task 4: Use the 'pop' method to remove the last element of the array and log the updated array.

number_array.pop();
console.log(number_array);

//Task 5: Use the 'shift' method to remove the first element from the array and log the updated array.

//number_array.shift();
console.log(number_array.shift());
console.log(number_array);

//Task 6: Use the 'unshift' method to add a new number to the beginning of the array and log the updated array.

number_array.unshift(1);
console.log(number_array);

//--------------------------------------------- Activity 3: Array Methods (Intermediate) ------------------------------------------------
//Task 7: Use the map method to create a new array where each number is doubled and log the new array.

const numdub = (num) => {
    return 2 * num;
}
const new_number = number_array.map(numdub);
console.log(new_number);

//Task 8: Use the 'filter' method to create a new array with only even numbers and log the new array.

const only_even = (num) => {
    if (num % 2 == 0)
        return num;
}
const res = number_array.filter(only_even); //filter does not execute the function for empty elements.
console.log(res)

//Task 9: Use the 'reduce' method to calculate the sum of all numbers in the array and log the result.

const reduc = (accumulator, num) => {
    return accumulator + num;
}
const sum = number_array.reduce(reduc);
console.log(sum)

//--------------------------------------------- Activity 4: Array Iteration ------------------------------------------------
//Task 10: Use a 'for' loop to iterate over the array and log each element to console.

for (let i = 0; i < number_array.length; i++){
    console.log(number_array[i]);
}

//Task 11: Use the 'forEach' method to iterate over array and log each element to console.

const fe = (item, index) => {
    console.log(item);
}
number_array.forEach(fe);

//--------------------------------------------- Activity 5: Multi-dimensional Arrays ------------------------------------------------
//Task 12: Create a two dimensional array and log the entire array to console.

const twD = [[0,1], [1,2]]
console.log(twD);

//Task 13: Acces and log a specific element from the two-dimensopnal array.

console.log(twD[0][1]);