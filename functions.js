// function bmiCalculator(){
//   var weight = parseInt(prompt("Enter your weight : "))
//   var height = parseFloat(prompt("Enter your height : "))

// // weight / height ** 2
//   var bmi = weight / (height ** 2)
//   if (bmi < 18.5){
//     console.log(`you're underweight as your bmi is ${bmi}`)
//   }else if (bmi >= 18.5 && bmi <= 24.9){
//     console.log(`you're of normal weight as your bmi is ${bmi}`)
//   }else if (bmi >= 25 && bmi <= 29.9){
//     console.log(`you're overweight as your bmi is ${bmi}`)
//   }else{
//     console.log(`You're obesse as your bmi is ${bmi}`)
//   }

// }


// function add(){
//   var x = parseInt(prompt("Enter number one : "))
//   var y = parseInt(prompt("Enter number two : "))
//   console.log(`the sum of ${x} and ${y} is ${x+y}`)
// }


// add()
// add()
// add()


// function subtract(x,y){
//     console.log(`the difference of ${x} and ${y} is ${x-y}`)
// }

// subtract(12,34)

// subtract(123,344)



// function bmiCalculator(weight,height,name){

// // weight / height ** 2
//   var bmi = weight / (height ** 2)
//   if (bmi < 18.5){
//     console.log(`${name}!, you're underweight as your bmi is ${bmi}`)
//   }else if (bmi >= 18.5 && bmi <= 24.9){
//     console.log(`${name}!, you're of normal weight as your bmi is ${bmi}`)
//   }else if (bmi >= 25 && bmi <= 29.9){
//     console.log(`${name}!, you're overweight as your bmi is ${bmi}`)
//   }else{
//     console.log(`${name}!, you're obesse as your bmi is ${bmi}`)
//   }

// }


// bmiCalculator(80,1.80,"arya")
// bmiCalculator(110,1.80,"goggee")     






// var add = ()=>{
//     console.log("adding");
// }

// add()

// in case of exactly a single parameter () can be ommited

// var greet = name =>{
//     console.log("hello world my name is " + name);
// }

// greet("abhishek")


// if all your function does is return something {} and return keyword can be ommited


var add = (x, y) => x + y


console.log(add(12, 23))



var marks = [213, 34, 4, 2342, 423, 234242, 42, 34, 34]


 var square = marks.map(mark => mark ** 2)
 console.log(square);