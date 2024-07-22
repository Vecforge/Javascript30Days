//--------------------------------------------- Activity 1: Function Declaration ------------------------------------------------
//Task 1: Write a function to check if a number is even or odd and log the result to the console.

function eve_odd(number){
    if (number % 2 == 0){
        console.log("Number is even");
    }
    else{
        console.log("Number is odd");
    }
}
eve_odd(100)

//Task 2: Write a function to calcyulate the square of a number and return the result.

function sq_calc(number){
    return (number * number)
}
console.log(sq_calc(100));

//--------------------------------------------- Activity 2: Function Expression ------------------------------------------------
//Task 3: Write a function expression to find the maximum of the two numbers and log the result to the console.

const max = function maximum(num1, num2) {
    num1 = num1 > num2 ? num1 : num2;
    console.log(num1);
}
max(37, 93)

//Task 4: Write a function expression to concatenate two strings and return the result.

const conc = function concat(st1, st2){
    return st1 + st2;
}
console.log(conc('abcd', 'efgh'));

//--------------------------------------------- Activity 3: Arrow Functions ------------------------------------------------
//Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

sum = (num1, num2) => {
    return num1 + num2;
}
console.log(sum(14, 635));

//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

bool = (str, char) => {
    temp = 0
    for (let i = 0 ; i < str.length; i++) {
        if (str.charAt(i) == char){
            temp = 1
            break;
        }
    }
    if (temp == 1){
        return true;
    }
    else{
        return false;
    }
}
console.log(sum("Abcd", 'd'))

//--------------------------------------------- Activity 4: Function Parameters and Default Values ------------------------------------------------
//Task 7: Write a function that takes two parameters and returns their product. Provide a default value for second parameter.

prod = (num1, num2 = 20) => {
    return (num1 * num2)
}
console.log(prod(10));
console.log(prod(10, 19));

//Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for age.

const greet = (name, age = 10) => {
    return ("Hello, " + name + "\nYour age is " + age);
}
console.log(greet("Devansh"));
console.log(greet("Devansh", 22));

//--------------------------------------------- Activity 5: Higher-Order Functions ------------------------------------------------
//Task 9: Write a higher order function that takes a function and a number, and calls the funtion that many times.

//Callback function to be passed into higher order functions
const callback = () => {
    console.log("This is a callback function");
}

//Higher-Order Function
const hof = (n, cbf) => {
    for(let i = 0; i < n; i++){
        cbf();
    }
}
hof(5, callback);

//Task 10: Write a higher order function that takes two functions and a value, applies the first function to the value, and then applies second function to the result.

const hof1 = (f1, f2 , val) => {
    let res = f1(val)
    console.log("result after function 1 = " + res);
    process.stdout.write("result after function 2 = ");
    f2(res)
}
hof1(sq_calc, eve_odd, 35)