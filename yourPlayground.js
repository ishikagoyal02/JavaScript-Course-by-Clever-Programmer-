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
// sumArrow=()=>
// {
//     x=Number(prompt('x?'))
//     y=Number(prompt())
//     return x + y
// }


// console.log(sumArrow())
// sumArrow=(a,b)=>a+b

// console.log(sumArrow(5,8))

// function name(a,b)
// {
//     return a+b
// }
// console.log(name('hi',0))

                                    //ARRAY

//  array=['a','b','c','d']
//  console.log(array)
// //  console.log(array[0])
// //  console.log(array[2])

// array.push('e')                                 //push operation
// console.log(array)

// console.log(array.slice(0,2))                   //0 is included and 2 is excluded   slice operation

// console.log(array.indexOf('b'))
// console.log(array.length)







                                    //OBJECTS



// const person = {                                              //person object
//     name: 'ishika',
//     rollNo: '2116173'
// }

// console.log(person.name)                                //dot notation
// console.log(person.rollNo)

// console.log(person['name'])                             //bracket bracket
// console.log(person['rollNo'])


// person.phnNo = '020-34456873'                          //object asssign

// console.log(person.phnNo)

// console.log(person)



// const person2 = {
//     name : 'hi',
//     class : 'hlo'
// }

// console.log(person.name)                                //dot notation
// console.log(person.class)

// console.log(person)
// console.log(person2)




// const introducer  = (name ,shirt) => {
     
//     const person = {
//         name1 : name ,
//         shirt1 : shirt,
//         assets : 100000,
//         liabilities : 5000,
//         netWorth : function(){
//             return this.assets-this.liabilities
//         }
//     }
//     console.log(`hi my name is ${person.name1} and i wear ${person.shirt1} and it's networth is ${person.netWorth()}`)
// }

// introducer('ishika','blue')





                                //FOR LOOP


// const fruit = ['a','b','c','d'] 

// for(i=0;i<fruit.length;i++)
//     console.log(i,fruit[i])

// for(const john of fruit) {
//     console.log(john)
// }    

        // for(const fruit of fruit) {                                 //WRONG PRACTICE
        //     console.log(fruit)
        // }


// const no = ['1','2','3','4']    
// sum=0 

// let result = []
// for(const john of no) {
//     sum+=Number(john)
//     result.push(sum)
// }

// console.log(sum)
// console.log(result)



// const howManyLetters = (phrase) =>                          //size of string function 
// {
//     for( i in phrase)
//     {
//         console.log(Number(i) +1)
//         result = Number(i) +1                                   //phrase.length
//     }
//     return {result : result}
// }

// const phrase= prompt("Write your Phrase : ")
// console.log(howManyLetters(phrase))


// sumArray = (array) =>                                           //ARRAY ELEMENTS SUM
// {
//     result =0

//     for(i of array)
//         result+= Number(i)
//     return result    
// }

// array = ['1','3','5','6']
// console.log(sumArray(array))

                                                                    //ARRAY MAX ELEMENT


// const arrayFreq = (array) =>                                        //ARRAY ELEMENT FREQ
// {
//     // letterFreq('haha' ) => {'h' :2 , 'a' : 2}

//     console.log(array)

//      let freq= {}                              //make freq object

//     for(const letter of array)

//     //check if letter exists in freq object
//     if(letter in freq)
//         freq[letter] = freq[letter] + 1                    //if yes, increment by +1
//     else
//             freq[letter] =   1                                  //otherwise, set value to 1

//     return freq
// }      

// array='hahaha'
// console.log(arrayFreq(array))


const wordFreq = (array) =>
{
    let freq = {}
    
    words = array.split(' ')
    for(const word of words)
    {
            if(word in freq)
                freq[word] += 1
            else
            freq[word] = 1 
    }

    return freq
}

console.log(wordFreq("hi, hi ishika ishika goyal"))

