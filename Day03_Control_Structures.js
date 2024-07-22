//--------------------------------------------- Activity 1: IF-ELSE Statements ----------------------------------------------
//Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

a = 10
if (a == 0) {
    console.log("The number is 0.")
}
if (a >= 1) {
    console.log("The number is Positive.")
}
else{
    console.log("The number is Negative.")
}

//Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

age = 18

if (age >= 18) {
    console.log("The person is eligible to vote")
}
else{
    console.log("The person is not eligible to vote")
}

//--------------------------------------------- Activity 2: Nested IF-ELSE Statements ----------------------------------------------
//Task 3: Write a program to find the largest of three numbers and log the result to the console.
a = 11
b = 10
c = 12

if (a > b){
    if (a > c){
        console.log("a is the largest of three numbers.")
    }
    else{
        console.log("c is the largest of three numbers.")
    }
}
else {
    if (c < b){
        console.log("b is the largest of three numbers.")
    }
    else {
        console.log("c is the largest of three numbers.")
    }
}

//--------------------------------------------- Activity 3: Switch Case ----------------------------------------------
//Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
choice = 7

switch (choice) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Not a valid day number!")
}

//Task 5: Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.

score = 80
grade = ""

switch (true) {
    case score >= 90 && score <= 100:
        grade = "A"
        break
    case score >= 80 && score < 90:
        grade = "B"
        break
    case score >= 70 && score < 80:
        grade = "C"
        break
    case score >= 60 && score < 70:
        grade = "D"
        break
    case score < 60:
        grade = "F"
        break
}
console.log(grade)

//--------------------------------------------- Activity 4: Conditional (Ternary) Operator ----------------------------------------------
//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

numb = 1726
result = numb % 2 == 0 ? "even" : "odd"
console.log(result)

//--------------------------------------------- Activity 5: Combining Conditions ----------------------------------------------
//Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
year = 1204

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0){
            console.log("Leap Year.")
        }
        else{
            console.log("Not a Leap Year.")
        }
    }
    else{
        console.log("Leap Year")
    }
}
else{
    console.log("Not a Leap Year")
}