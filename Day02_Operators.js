//--------------------------Activity 1: Arithmetic Operations--------------------------
//Task 1: WAP to add two numbers and log the result to the console
num_a = 27
num_b = 28
console.log(num_a + num_b)

//Task 2: WAP to subtract two numbers and log the result to the console
num_a = 27
num_b = 28
console.log(num_a - num_b)

//Task 3: WAP to multiply two numbers and log the result to the console
num_a = 27
num_b = 28
console.log(num_a * num_b)

//Task 4: WAP to divide two numbers and log the result to the console
num_a = 27
num_b = 28
console.log(num_a / num_b)

//Task 5: WAP to find the remainder when one number is divided by another and log the result to the console
num_a = 27
num_b = 28
console.log(num_a % num_b)

//--------------------------Activity 2: Assignment Operations--------------------------
//Task 6: use the += operator to add a number to a variable and log the result to the console
a = 18
a += 3
console.log(a)

//Task 7: use the += operator to add a number to a variable and log the result to the console
a = 18
a -= 3
console.log(a)

//--------------------------Activity 3: Comparison Operations--------------------------
//Task 8: Write a program to compare two numbers using '>' and '<' and log the result to the console.
a = 10
b = 20
if (a < b) {
    console.log("b is greater")
}
else if (a > b) {
    console.log("a is greater")
}

//Task 9: Write a program to compare two numbers using '>=' and '<=' and log the result to the console.
a = 10
b = 20
if (a <= b) {
    console.log("a is <= b")
}
else if (a >= b) {
    console.log("a is >= b")
}

//Task 10: Write a program to compare two numbers using '==' and '===' and log the result to the console.
a = 10
b = '10'
if (a == b) {
    console.log("a == b")
}
if(a === b) {
    console.log("a === b is true")
}
else{
    console.log("a === b is false")
}

//--------------------------Activity 4: Comparison Operators--------------------------
//Task 11: Write a program that uses the '&&' operator to combine two conditions and log the results to the console.
a = 10
b = 12
if (a >=10 && b <= 12){
    console.log("The number is 11")
}

//Task 12: Write a program that uses the '||' operator to combine two conditions and log the results to the console.
a = 10
b = 20
if (a === 0 || b === 0 ){
    console.log("The multiplication will always be 0")
}
else {
    console.log(a * b)
}

//Task 13: Write a program that uses the '!' operator to combine two conditions and log the results to the console.
a = 10
if (!(a === 10)){
    console.log("a is not equal to 10")
}

//--------------------------------------------- Activity 5: Ternary Operators ----------------------------------------------
//Task 14: Write a program that uses ternary operator to check if a number is positive or negative and log the result to the console.
a = -1
m = a > 0 ? "Positive Integer" : "Negative Integer"
console.log(m);