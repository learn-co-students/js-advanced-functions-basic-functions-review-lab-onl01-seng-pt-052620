// Your code here
function saturdayFun(str = "roller-skate"){
  return (`This Saturday, I want to ${str}!`)
}

let mondayWork=function(str="go to the office"){
  return (`This Monday, I will ${str}.`)
}
function wrapAdjective(s='*') {
return function(str = 'special'){
    return `You are ${s}${str}${s}!`
  }
}

const Calculator = {
  add: function(a,b){return a+b},
  subtract: function(a,b){return a-b},
  multiply: function(a,b){return a*b},
  divide: function(a,b){return a/b}
};

function actionApplyer(s, arr){
  for (let i = 0; i<arr.length; i++ ){
    s = arr[i](s)
  }
  return s
}
