var car = {
    model : "i10",
    brand : "hyundai",
    year : 2020,
    colors : ["red","grey","black"],
}

console.log(car["model"]);
console.log(car.model);

car.model = "Mustang"

car.brand = "Ford"


car.isAvailable = true;


console.log(car);



// var txt = "hello world my name is rohan"

// var charObj  = {}

// for(var i = 0; i < txt.length ; i++){
//     var char = txt[i]
//     if (charObj[char]){
//         charObj[char] += 1
//     }else{
//         charObj[char] = 1
//     }
// }


// console.log(charObj);


// var ankit = {
//     name : "ankit singh",
//     age : 21,
//     gender : "Male",
//     skills : ["nothing"],
//     eat : function(){
//         console.log("Kha raha hoon!");
//     }
// }
// ankit.eat()




// class Student{
//     // properties (variable)
//     name = "gogee singh"
//     age = 23
//     // methods (function)

//     greet(){
//         console.log("hello world");
//     }
// }
// // instance / object

// var s1 = new Student()
// s1.greet()
// console.log(s1);
// var s2 = new Student()
// s2.greet()
// console.log(s2);
// var s3 = new Student()
// s3.greet()
// console.log(s3);



class Person {
    // created an empty object 
    constructor(name,age,gender){
        this.person_name = name
        this.person_age = age
        this.person_gender = gender
        console.log("created a new person" , this.person_name);
    }
    
    // create(name,age,gender){
    //         this.person_name = name
    //         this.person_age = age
    //         this.person_gender = gender
    // }



}

var ankit = new Person("ankit",23,"Male")
console.log(ankit);



// without constructor

// var ankit = new Person()
// console.log(ankit);

// ankit.create("ankit",23,"male")
// console.log(ankit);