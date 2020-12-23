function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(str = "*") {
  return function(prm = "special") {
    return `You are ${str}${prm}${str}!`
  }
}

let Calculator = {
  add: (a,b) => {
    return a + b  
  },
  subtract: (a,b) => {
    return a - b
  },
  multiply: (a,b) => {
    return a * b
  },
  divide: (a,b) => {
    return a / b
  }
}

function actionApplyer(start, arr) {
  if (arr.length === 0) {
    return start
  }
  arr.map(x => {
    start = x(start)
  })
  return start
}