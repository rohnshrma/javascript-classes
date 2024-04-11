

// var year = parseInt(prompt("Enter an year : "))
// if (year % 4 == 0) {

//     if (year % 100 == 0) {

//         if (year % 400 == 0) {
//             console.log(`${year} is a leap year`)
//         } else {
//             console.log(`${year} is not a leap year`)
//         }

//     } else {
//         console.log(`${year} is a leap year`)
//     }

// } else {
//     console.log(`${year} is not a leap year`)
// }




// var today = parseInt(prompt("Enter a number between 0 - 6", "0-6"))

// switch (today) {
//     case 0:
//         alert("Today is sunday")
//         break
//     case 1:
//         alert("Today is monday")
//         break
//     case 2:
//         alert("Today is tuesday")
//         break
//     case 3:
//         alert("Today is wednesday")
//         break
//     case 4:
//         alert("Today is thursday")
//         break
//     case 5:
//         alert("Today is friday")
//         break
//     case 6:
//         alert("Today is saturday")
//         break

//     default:
//         alert("Invalid day")
//         break


// }



// var age = parseInt(prompt("Enter your age : "))


// switch (age) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         alert("you can watch the movie for free!")
//         break
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         alert("Ticket Price : $ 2")
//         break
//     case 11:
//     case 12:
//     case 13:
//     case 14:
//         alert("Ticket Price : $ 5")
//         break

//     default:
//         alert("Ticket Price : $ 10")
//         break

// }



// fixed iteration : initialization ; condition ; increment / decrement

// for

// for (var i = 1 ; i <= 10;i++){
// console.log(i , "hello");
// }


// for (var i = 2 ; i <= 20 ; i+=2){
//     console.log(i,"hello");
// }


// var num = parseInt(prompt("Enter a number : "))

// for (var i = 1; i<=10;i++){
//     // console.log(num  * i);

//     console.log(`${num} X ${i} = ${num * i}`);

// }


// for (var i = 1; i <= 100; i++) {
//     if (i % 15 == 0 ) {
//         console.log("FizzBuzz")
//     }
//     else if (i % 5 == 0) {
//         console.log("Buzz")
//     } else if (i % 3 == 0) {
//         console.log("Fizz")
//     } else {
//         console.log(i)
//     }




// }
// for (var i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz")
//     }
//     else if (i % 5 == 0) {
//         console.log("Buzz")
//     } else if (i % 3 == 0) {
//         console.log("Fizz")
//     } else {
//         console.log(i)
//     }

// }




// var yourName = "arya rana is a student of mine"

// 

// console.log(yourName.charAt(0));
// console.log(yourName[0]);
// console.log(yourName[1]);
// console.log(yourName[2]);
// console.log(yourName[3]);
// console.log(yourName[4]);
// console.log(yourName[5]);
// console.log(yourName[6]);
// console.log(yourName[7]);
// console.log(yourName[8]);


// for (var i = 0 ; i < yourName.length;i++){
//     console.log(yourName[i]);
// }



// for(var i = yourName.length - 1 ; i >= 0 ; i--){
//     console.log(yourName[i].repeat(3));
// }


// initialization
// var i = 1;

// while(i <= 10){ // condition

//     console.log(i)

//     // increment
//     i++;


// }



// var i = yourName.length - 1 // initialization
// while (i >= 0){ // condition

//     console.log(yourName[i]);

//     i-- //descrement
// }


// non fixed iteration






// var yourName = prompt("Enter your name : ").toLowerCase()
// while (yourName.charAt(0) !== "n"){
//     yourName = prompt("Enter your correct name : ")
// }

// alert("welcome " + yourName)



// var yourName = prompt("Enter your name : ").toLowerCase()

// while (yourName.length < 3 || yourName.charAt(0) !== "n") {
//     yourName = prompt("Enter your correct name : ")
// }
// alert("welcome " + yourName)





// while : fixed iteration | non Fixed iteration

// var marker = prompt("Choose your marker 'X' or 'O' :").toLowerCase()
// while ( marker != "x" && marker != "o" ){
//     marker = prompt("Choose your marker 'X' or 'O' :")
// } 
// console.log("you've chosen : " + marker)


// var i = 100;
// while (i < 10){
//     console.log("hello world");
//     i++
// }


// var i = 100;
// do {
//     console.log("hello world",i);
//     i++
// } while (i < 10)

// var txt = prompt("Enter a string : ")
// var vowels = 0
// for (var i = 0; i < txt.length; i++) {
//     var char = txt[i]
//     if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//         vowels += 1
//     }
// }
// alert(`Number of vowels in '${txt}' are ${vowels}`)


// var secret = Math.floor(Math.random() * 100) + 1
// var attempt = 0
// while (attempt < 10) {
//     attempt++
//     alert(attempt);
//     var guess = parseInt(prompt("Enter your guess : ", "1-100"))
//     if (guess < secret) {
//         alert("Too Low! Guess High.")
//     } else if (guess > secret) {
//         alert("Too High! Guess Low.")
//     } else if (guess == secret) {
//         alert(`Congratulation! You Guessed the right number '${secret}'`)
//         break
//     }
// }
// alert("You Lost and failed to guess the right number\nThe Secret Number was ", secret);

