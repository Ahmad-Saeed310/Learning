// try takes any callback which can synchronous and asynchrounous and then wraps its result in promise

// Copy
// Promise.try(func)
// Promise.try(func, arg1)

// Try / Catch / Finally — Practice

// Q1 — Basic try...catch
// Write a function divide(a, b) that:

// Divides a by b
// If b is 0, throw an error
// Use try...catch to handle the error
// If there is an error, display a suitable message

// const divide = (a,b) => {
//         try { let divides = a/b;
//             if(b == 0) {throw new Error ("b is zero");}
//             return `it gets divided and answer is ${divides}`
//         }
//         catch(error){
//             console.log(error)
//         }
// }

// console.log(divide(4,2));
// console.log(divide(4,0));

// Create a function getUserAge(age) that:

// Accepts an age
// If the age is less than 0, throw an error
// Otherwise, display "Valid age"
// Use try...catch to handle the error

// const getUserAge = (age) => {
//   try {
//     if (age < 0) {
//       throw new Error(`${age} is less than zero`);
//     }
//     // console.log(age)
//     return `${age} is equal or greater than zero`;
//   } catch (Error) {
//     console.log(Error);
//   }
// };
// console.log( getUserAge(30))
// console.log( getUserAge(-30))

// Q3 — finally
// Create a function login(username, password) that:

// Uses try...catch...finally
// If either username or password is empty, throw an error
// Catch and display the error
// The finally block should always display "Login attempt finished"

//  const login = (username,password) => {
//     try{
//         if(!username){throw new Error (`does not have the "username"`)}
//         if(!password){throw new Error (`does not have the "password"`)}
//         return `${username} ,${password}`
//     }catch(err){
//         console.log(err);

//     }finally{
//         console.log("Login attempt finished");

//     }}

//     console.log(login("ahmad",1))

// why is it that finally statement is first in console

//     Q4 — Throw your own error
// Create a function checkPassword(password) that:

// Throws an error if the password has fewer than 8 characters
// Otherwise, displays "Password accepted"
// Handle the error using try...catch

// const checkPassword = (password) => {
//   try {
//     if (password.length < 8) {
//       throw new Error(`characters are less than eight`);
//     }
//     console.log(password);
//     return `${password}`;
//   } catch (err) {
//     console.log(err);
//   }
// };

// console.log(checkPassword("1234567"));
// console.log(checkPassword("12345678"));


// why there is "undefined" in console 

// const userData = '{"name":"Ahmad","age":20}';

// // Write code that:

// // Converts userData from JSON into a JavaScript object
// // Uses try...catch so your program doesn't crash if the JSON is invalid
// // If successful, display the user's name

// // Then change userData to something invalid and test your error handling.

// const takesData = userData => {
//     try{
//         let data = JSON.parse(userData);
//         let name = data.name;
//         return name;
//     }catch(err){
//         console.log(err)
//     }
// }
// console.log(takesData(userData))

