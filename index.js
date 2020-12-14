function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work="go to the office") {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(sentence="*") {
    return function(adj="special") {
        return `You are ${sentence}${adj}${sentence}!`
    }
}

const Calculator = {
    add: function(a,b) {
        return a + b
    },
    subtract: function(a,b) {
        return a - b
    },
    multiply: function(a,b) {
        return a * b
    },
    divide: function(a,b) {
        return a / b
    }
}

function actionApplyer(int, arr) {
    let start = int
    for (let i = 0; i < arr.length; i++ ){
        start = arr[i](start)
      }
    return start
    
}