// Your code here

function saturdayFun(activityString = 'roller-skate') {
  return `This Saturday, I want to ${activityString}!`
}

function mondayWork(activityString = 'go to the office') {
  return `This Monday, I will ${activityString}.`
}

function wrapAdjective(visualFlairChar = '*') {
  return (adjective = 'special') => {
    return `You are ${visualFlairChar}${adjective}${visualFlairChar}!`;
  }
}

const Calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  }
}

function actionApplyer(startingInteger, functionArray) {
  for (let i = 0; i < functionArray.length; i++) {
    startingInteger = functionArray[i](startingInteger);
  }
  return startingInteger;
}