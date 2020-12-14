// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!` 
}

function mondayWork(word="go to the office"){
    return `This Monday, I will ${word}.`
}

function wrapAdjective(style="*"){
    return function(message="a dedicated programmer"){
        return `You are ${style}${message}${style}!`
    }
}
   

let Calculator = {
    add: function(a, b){
       return a + b
    },

    subtract: function(a, b){
        return a - b
    },

    divide: function(a, b){
        return a / b
    }, 
    
    multiply: function(a, b){
        return a * b
    }
}

function actionApplyer(num, arrayOfFunctions){
    for (let index = 0; index < arrayOfFunctions.length; index++) {
        num = arrayOfFunctions[index](num) 
    }
    return num 
} 