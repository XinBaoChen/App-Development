console.log("Test test")
console.log(`---Example 1 ---`)
for(let counter = 10; counter >= 0; counter--){
    console.log(`Currently counting ${counter}`)
}

console.log(`---Example 2 ---`)
let initalNum = parseInt(prompt("Enter a number between 0 and 90"))
for(initalNum; initalNum >= 0; initalNum--){
    console.log(`Counting = ${initalNum}`)
    if(initalNum % 5 === 0){
        console.log(`counting = ${initalNum}`)
    }
}

console.log(`---Example 3 ---`)
let cars = ["Mazda", "Tesla", "Dodge","Bmw", "Porshe"]
for (let eachcarr of cars){
    console.log(eachcarr)
}

console.log(`---Example 4 ---`)
for(let outerCounter = 1; outerCounter <= 5; outerCounter++){
    console.log(`outer counter = ${outerCounter}`)
    for(let innerCounter = 30; innerCounter >= 0; innerCounter -= 10){
        console.log(`\t\tinnercounter = ${innerCounter}`)
    }
}

console.log(`---Example 5 ---`)
let i = 10
while(i >= 0){
    console.log(`Currently counting ${i}`)
    i--
}
let userNum = parseInt(prompt("Enter a number"))
let checkUserNum = isNaN(userNum)
while(checkUserNum){
    userNum = parseInt(prompt("You didn't enter a number try again"))
    checkUserNum = isNaN(userNum)
}
console.log(`You enetered ${userNum}`)

console.log(`---Example 6 ---`)
for(let counter = 5; counter >= -10; counter--){
    console.log(`counting = ${counter}`)
    if(counter === -3){
        continue
    }
    else{
    console.log(`Counting = ${counter}`)
    }
}
console.log(`---Example 7 ---`)
for(let y = -10; y <=10; y++){
    if(y% 2 === 0){
        console.log(y);
    }
  
}

// functions
function printCount(){
    for(let n = 3; n > 0; n-=1){
        console.log(n)
    }
}

function greeting(name){
    console.log(`Hello ${name}`)
}

function greet(firstName, lastName){
    console.log("Example 5")
    console.log(`Hello ${firstName} ${lastName[0].toUpperCase()}`)
}

function doubleNumber(number){
    console.log("Example 9")
    let checkUserNum = isNaN(number)
    while(checkUserNum){
        number = parseInt(prompt("Please enter an number"))
        checkUserNum = isNaN(number)
    }
    let dNumber = number * 2
    return dNumber
}

//when the function doubleNumber is called and the user didn't enter an argument, number as an argument the program will ask the user to enter a number.
//The function will fully run the user when the users enters an argument