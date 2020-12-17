// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

let wrapAdjective = function(character = "*") {
    return function(descriptor = "special") {
        console.log(`You are ${character}${descriptor}${character}!`)
        return `You are ${character}${descriptor}${character}!`
    }
}

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2
    },
    subtract: function(num1, num2) {
        return num1 - num2
    },
    multiply: function(num1, num2) {
        return num1 * num2
    },
    divide: function(num1, num2) {
        return num1/num2
    }
}

function actionApplyer(integer, arrayOfFunctions) {
    let a = integer

    for (let i = 0; i < arrayOfFunctions.length; i++ ){
        a = arrayOfFunctions[i](a)
      }
    return a
}





    