// this represent the context of the code 
// it specifically tells or provide the info of the object it has been used 
// giving its context 
// which can be local or global
const students = {
    student1:{
        name :"Emporer",
        class:10,
        expertise:"writing",
        says(){
            return `the name of the student is ${this.name}`
        }
    }
}



const name = "Majid";

console.log(students.student1.says())


//  is a built-in method used to invoke a function with a specific this value and arguments provided individually.
// call in js 
// call method helps to call a function with objects as an arguments of the function 
// "this" the keyword is usually the first argument with the rest seprated with the help of comma 
// functionName.call(this, arg1, arg2, ...);

const callTest = {
    speaks : function(arg){
        console.log(`${this.name} has spoken ` + arg)
    }
}

callTest.speaks.call(students.student1,"speakers")

// apply works similar to the call but the only difference is that the apply takes arguments in an array 
callTest.speaks.apply(students.student1,[1,2,3])

// apply and call does not create a new function 
// bind creates a new function 
// syntax of bind 
// const newFunction = functionName.bind(this, arg1, arg2, ...);

// without bind "this" might get lost 
let newCall = callTest.speaks.bind(students.student1,"from bind");
newCall();