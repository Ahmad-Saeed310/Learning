// this represent the context of the code 

const students = {
    student1:{
        name :"Ahmad",
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
