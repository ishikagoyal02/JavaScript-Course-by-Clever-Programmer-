console.log('hello world')
console.log('hii')

const prompt=require("prompt-sync")();                                          //TO USE PROMPT() USE THIS
// fruit=Number(prompt('How much fruit you want'))                              TYPECASTING AND prompt() function
// console.log('fruit=',fruit) 


// tipPre=Number(prompt('tip%?')/100)
// tipAmount=fruit*tipPre
// console.log('tipAmount=',tipAmount)

// total=fruit+tipAmount
// console.log('total=',total)                                                  //Display



                            //math operation

// console.log(Math.floor(3.7))
// console.log(Math.floor(Math.random()*2))



                            //baby weather function 

function weather()                                                  //weather function definition
{
    let weather=prompt('How is the weather?')

    if(weather=='rainy')
        console.log('Being umbrella')
    else    
        console.log('Wear your sunglasses')

}  
//weather()                                                           //weather function calling

                            //guest welcoming
//Function 
//this is a function cld greeting2
//it has 1 argument c/d `name`
//does:it logs out your name to console
// function greeting2(name)
// {
//     g='hi '+name                                                //string concatenation
//     console.log(g,',Nice to meet you')                      

//     //console.log('hi ',name,'Nice to meet you')

//     //console.log(`hi ${name},nice to meet you`)                //template literal
// }

// function greeting()
// {
//     console.log('ishika')
// }

// let name=prompt('Your name?')
// greeting2(name)

// greeting()                                                          //no concept of function overloading

                                    //calculator
// function calFoodTotal(food,tip)
// {
//     const tipPer = tip/100;
//     const tipAmount = food*tipPer
//     return food + tipAmount
// }

// console.log(calFoodTotal(100,30))

                                //arrow function
sumArrow=()=>
{
    x=Number(prompt('x?'))
    y=Number(prompt())
    return x + y
}


console.log(sumArrow())
sumArrow=(a,b)=>a+b

console.log(sumArrow(5,8))

function name(a,b)
{
    return a+b
}
console.log(name('hi',0))