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








// function lifeSpan(fn){
//    var age = fn()
//    var average_age = 90
//    var year_left = average_age - age
//    console.log("Years Left :",year_left);
// }

// lifeSpan(function(){
//     var yob = parseInt(prompt("Enter your year of birth :"))
//         var cy = new Date().getFullYear()
//         return cy - yob //return age
// })


// lifeSpan(calcAge)



// function calcAge(){
//     var yob = parseInt(prompt("Enter your year of birth :"))
//     var cy = new Date().getFullYear()
//     return cy - yob //return age
// }



// for(var i = 0 ; i < animals.length ;i++){
//     var animal = animals[i]
//     console.log(animal);
// }


// higher order functions
// animals.forEach(function(animal){
//     console.log(animal);
// })



// var sum = 0 
// marks.forEach(function(mark,index,self){
//     sum+=mark
//     console.log(mark,index,"current Array =>",self);
// })
// console.log(sum);



// var doubles = []
// for (var i = 0;i < marks.length;i++){
//     var mark = marks[i]
//     doubles.push(mark*2)
// }
// console.log(doubles);



// return a new array after performing specified action on each item
// var result = marks.map(function(mark){
// return mark * 2
// })

// console.log(result);




// var isEvens = marks.map(function(mark){
//     return mark % 2 == 0
// })

// console.log(isEvens);


// var isEvens = []
// for (var i = 0;i < marks.length;i++){
//     var mark = marks[i]
//     isEvens.push(mark % 2 == 0)
// }
// console.log(isEvens);


// ================================== arr.filter


// var evens = []
// for (var i = 0;i < marks.length;i++){
//     var mark = marks[i]
//     if(mark % 2 == 0){
//         evens.push(mark)
//     }
// }
// console.log(evens);





// var evens = marks.filter(function(mark){
// return mark % 2 == 0
// })
// console.log(evens);



// var txt = prompt("Enter a big string : ")
// var list = txt.split("")

// var vowels = list.filter(function(chr){
//     return chr == "a" || chr == "e" || chr == "i" || chr == "o" || chr == "u" 
// })
// console.log(vowels);





// case : when accumulaters value is not explicitly provided
// acc : arr[0] , cv : arr[1]

// var sum = marks.reduce(function(acc,cv){ 
// return  acc + cv // acc = acc + cv
// })













// var marks = [213, 34, 3, 23, 23, 1,34, 5, 5767, 234]

var fruits = ["apple", "kiwi", "Dragonfruit", "banana", "orange", "cherry", "papaya"]

// var res = fruits.sort((a,b)=>{
//     return b-a
// })

// console.log(res);


// var res = fruits.sort((a,b)=> {
// return a.length - b.length
//     return  b.length - a.length 
// })
// console.log(res);
// var res = marks.sort((a,b)=> a-b)
// var res = marks.sort((a,b)=> b-a)
// some , every , sort


// var res = marks.some((mark)=>{
//     return mark % 2 == 0
// })

// console.log(res);

// var res = marks.every((mark)=>{
//     return mark % 2 == 0
// })

// console.log(res);


// case : when accumulaters value is explicitly provided
// acc : initialValue , cv : arr[0]
// var sum = marks.reduce(function (acc, cv) {
//     return acc + cv // acc = acc + cv
// }, 0)

// var result = marks.reduce(function(max, cv){
//     if (cv > max){
//         return cv
//     }else{
//         return max
//     }
// })


// var result = marks.reduce(function(min, cv){
//     if (cv < min){
//         return cv
//     }else{
//         return min
//     }
// } , marks[0])


// var result = marks.reduce(function(max, cv){
//     if (cv > max){
//         return cv
//     }else{
//         return max
//     }
// } , marks[0])




// anonymous  functions can be assigned as a value to a variable
// var bmi = function (w, h) {
//     return w / h ** 2
// }

// console.log(bmi(90,1.80))


// function calAge(){
//     var yob = parseInt(prompt("Enter your year of birth : "))
//     var cy = new Date().getFullYear()
//     return cy - yob
// }

// var myAge = calAge()
// console.log(myAge);



// function lifeSpan(average_age , ageFunc){
//     var age = ageFunc()
//     var year_left = average_age - age
//     console.log(`years left : ${year_left}`);
// }
// lifeSpan(100,function (){
//         var yob = parseInt(prompt("Enter your year of birth : "))
//         var cy = new Date().getFullYear()
//         return cy - yob
//     }).


// function add(){
// var x = parseInt(prompt("Enter the value of num 1:")) 
// var y = parseInt(prompt("Enter the value of num 2:")) 
// return x + y
// }

// function printData(cb){
// console.log(`the result is : ` , cb());
// }

// printData(function (){
//     var x = parseInt(prompt("Enter the value of num 1:")) 
//     var y = parseInt(prompt("Enter the value of num 2:")) 
//     return x + y
//     })


// arrays => a data type used to store multiple values of different data types

// [ item1, item2,......] are used to create an array

// var names = ["Esha","Rohan","Sharma","Dagar","Rana"]

// console.log(names[0]);

// names.push("bye bye world")

// names.pop()

// removes the item on the 0th index
// names.shift()

// names.unshift("bye bye world")



// console.log(names);



// function findSum(arr) {
//     var sum = 0
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }



var marks = [213, 34, 3, 23, 23, 1, 34, 5, 5767, 234]

// console.log(findSum(marks))
// console.log(findSum([213, 34, 3, 23, 23, 1, 34, 5, 5767,345,23,2,3 ,234]))
// console.log(findSum([213, 34, 3, 23, 23, 1, 34, 5, 576,34,34,3,4,7, 234]))



// helps us to iterate (go over) an array : void

// function findSum(arr) {
//     var sum = 0

//     arr.forEach(function (value, index, self) {
//         sum+=value
//     })

//     return sum
// }


// console.log(findSum(marks))

// helps us to iterate (go over) an array : array(storing the result of the action performed)

// var doubles = marks.map(function(mark,index,self){
// return mark*2
// })

// console.log(doubles);


// var doubles = []
// for (var i = 0 ; i < marks.length ;i++){
//     doubles.push(marks[i] * 2)
// }

// console.log(doubles);


// function findOdds(arr) {
//     var odds = []
//     arr.forEach(function (value) {
//         value % 2 != 0 && odds.push(value)   
//     })
//     return odds

// }

// console.log(findOdds(marks));



// function findEvens(arr) {
//     var evens = []
//     arr.forEach(function (value) {
//         value % 2 == 0 && evens.push(value)   
//     })
//     return evens

// }

// console.log(findEvens(marks));




var evens = marks.filter(function(value){
return value % 2 == 0
})

console.log(evens);
var odds = marks.filter(function(value){
return value % 2 != 0
})

console.log(odds);