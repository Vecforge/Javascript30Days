//--------------------------------------------- Activity 1: For Loop ----------------------------------------------
//Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

//Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i*5)
}

//--------------------------------------------- Activity 2: While Loop ----------------------------------------------
//Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop
i = 1
sum = 0

while (i <= 10){
    sum += i
    i++
}
console.log(sum)

//Task 4: Write a program to print numbers from 10 to 1 using a while loop.
i = 10

while (i >= 1){
    console.log(i)
    i--
}

//--------------------------------------------- Activity 2: Do...While Loop ----------------------------------------------
//Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
i = 1
do{
    console.log(i)
    i++
}while(i <= 5);

//Task 6: Write a program to calculate factorial of any number using a do...while loop.
numb = 5
fact = 1
do{
    fact *= numb
    numb--
}while(numb >= 1);

console.log(fact)

//--------------------------------------------- Activity 4: Nested Loops ----------------------------------------------
//Task 3: Write a program to print a pattern using nested for loops.
// *
// * *
// * * * 
// * * * *
// * * * * *

for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write("* ")
    }
    console.log("")
}

//--------------------------------------------- Activity 5: Loop Control Statements----------------------------------------------
//Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the 'continue' statement.
for (let i = 1; i <= 10; i++) {
    if (i == 5){
        continue
    }
    console.log(i)
}

//Task 8: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using 'break' statement.
for (let i = 1; i <= 10; i++) {
    if (i == 7){
        break
    }
    console.log(i)
}