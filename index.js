// Your code here
function saturdayFun(action = "roller-skate") {
    return `This Saturday, I want to ${action}!`
}

function mondayWork(work = "go to the office") { 
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair="*") {
    return function inner(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}

var Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

function actionApplyer(starting, array) {
    if (array === []) {
        return starting
    } else { 
        for (let i = 0; i < array.length; i++)
            starting = array[i](starting);
    }
    return starting;
}