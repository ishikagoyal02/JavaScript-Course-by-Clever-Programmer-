/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

const prompt=require("prompt-sync")();

function add(){

    x=Number(prompt())
    y=Number(prompt())
    return x+y
  //Add function here
}

function sub(){
    
    x=prompt()
    y=prompt()
    return x-y
  //Subtract function here
}

function div(){
  x=prompt()
  y=prompt()
  return x/y
  //Divide function here
}

function mul(){
  x=prompt()
  y=prompt()
  return x*y
  //Multiply function here
}

console.log('hello from the SUM exercise')
console.log(add())
console.log(sub())
console.log(div())
console.log(mul())
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/