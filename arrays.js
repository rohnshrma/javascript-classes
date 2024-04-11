// collection of items : store multiple values of different data types in a single varible
// [item,.,.,.] are used to create an array


var fruits = ["apple", "banana", "cherry"]
var marks = [123, 234, 45, 345, 234, 234]
var rohan = ["rohan", "sharma", 16, 1.80, "Male", true, ["coding", "coding", "coding"]]


// adds new item in the end of the array
// fruits.push("kiwi")


// fruits.pop()
// console.log(fruits);

// console.log(fruits);
// console.log(fruits[2]);


// function upperConverter(arr){
//     for (var i = 0 ; i < arr.length ; i++){
//         console.log(arr[i].toUpperCase());
//     }
// }

// upperConverter(fruits)




// output the sum of all the items of an array
// var marks = [123,234,45,345,234,234]

// function findSum(arr) {

//     var sum = 0

//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i] // sum = sum + arr[i]
//     }

//     console.log(sum);
// }

// findSum([23,34,2,32,3434,34,34,432,32,32323])





// function greeting(name){
//     console.log("hello world my name is" , name)
// }

// greeting("deepanshu")
// greeting("goggee")
// greeting("goggee")
// greeting("goggee")
// greeting("goggee")
// greeting("goggee")
// greeting("goggee")
// greeting("goggee")
// greeting("goggee")
// greeting("goggee")
// greeting("goggee")
// greeting("goggee")
// greeting("goggee")



// function add(x,y){
//     console.log(x+y);
// }


// add(13,56)
// add(113,516)
// add(123,564)



// function logs(){
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     return;
//     console.log(4);
//     console.log(5);
//     console.log(6);
// }

// logs()


// function logs (name){

//     if(name == "ankit"){
//         return "nikal"
//     }

//     if(name.length >= 3 && name.charAt(0) == "a"){
//         console.log("welcome" , name);
//     }else{
//         console.log("not invited" , name);

//     }


// }


// logs("aditya")

// console.log(logs("ankit"))

// var result = logs("ankit")










// var name = "goggee" // global


// function calcBmi(weight,height){
//     var bmi = weight / (height**2) // local

//     console.log(`hello ${name} your bmi is ${bmi}`);
// }
// calcBmi(80,1.80)

// console.log(bmi);



// var name = "goggee" // global


// function calcBmi(weight,height){
//     var bmi = weight / (height**2) // local

//     console.log(`hello ${name} your bmi is ${bmi}`);
//     return bmi
// }
// var yourBmi = calcBmi(80,1.80)

// console.log(yourBmi);



// function greeting(name = "john doe"){
// console.log("hello world my name is " + name);
// }

// greeting()
// greeting("rohan")



// function greeting (first , last){
//     console.log("hello world my name is  " + first + " " + last);
// }


// greeting("rohan","sharma")


// 





var animals = ["Lion", "Bear", "Tiger", "Lion", "Cat", "deer"]

// animals.push("Lalit")

// console.log(animals.length).


// console.log(animals.includes("lalit"))
// console.log(animals.includes("lalit"))
// console.log(animals.includes("Lion"));
// console.log(animals.includes("Lion" , 2));
// console.log(animals.includes("Lion" , 4));


// console.log(animals.at(0))
// console.log(animals.at(-1))

// console.log(animals.indexOf("Lion"))
// console.log(animals.indexOf("Lion" , 2))


// animals.splice(3,1) // start , remove count

// animals.splice(3,1,"lalit") // start , remove count , new item
// animals.splice(3,0,"lalit") // start , remove count , new item
// animals.splice(3,2,"lalit") // start , remove count , new item
// animals.splice(3,2,"lalit","gogee") // start , remove count , new item's


// console.log(animals.slice(1,3))

// console.log(animals.unshift("gogee"));


// animals.shift()

// console.log(animals.reverse())

// console.log(animals);

// console.log(animals.lastIndexOf("Lion"))
// console.log(animals.lastIndexOf("Lion" , 2 ))
// console.log(animals.lastIndexOf("Lioness" ))



// assign it as a value to a variable
// var add = function (x,y){
//     return x + y 
// }

// console.log(add(12,34))




// create a function called calcAge 
// which takes the year of birth as input from the user 
// and return the age of the user


//when a function is passed into another function as parameter , the passed becomes a callback function


// var cy =  new Date().getFullYear() 
// var calcAge = function(){
//     var yob = parseInt(prompt("Enter your year of birth :"))
//     var cy =  new Date().getFullYear() 
//     return cy - yob
// }

// calcAge()


// var lifeSpan = function (cb) {
//     var age = cb() // calcAge
//     var average_age = 90;
//     var year_left = average_age - age
//     console.log(year_left);
// }


// lifeSpan(calcAge())

// lifeSpan(function () {
//     var yob = parseInt(prompt("Enter your year of birth :"))
//     var cy = new Date().getFullYear()
//     return cy - yob
// })




// function printDetails(func){
//     var result = func()
//     console.log("the result is ", result)
// }


// printDetails(function(){
//     return 100
// })

// printDetails(data)

// function data(){
    // return 100
// }
