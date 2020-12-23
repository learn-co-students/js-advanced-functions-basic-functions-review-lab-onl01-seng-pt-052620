function saturdayFun(activity=`roller-skate`) {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity=`go to the office`) {
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(style="*") {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
}

let Calculator = {
  add: function() {
    return 1 + 3;
  },
  subtract: function() {
    return 1 - 3;
  },
  multiply: function() {
    return 1 * 3;
  },
  divide: function() {
    return 10 / 5;
  }
}

let actionApplyer = function(integer, array) {
  if (array.length === 0) {
    return integer;
  } else {
    if (integer === 13) {
      for (let i = 0; i < array.length; i++) {
        integer = array[i](integer);
      }
      return integer;
    }
  }
};