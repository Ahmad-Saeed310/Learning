// // making an object 
// const object={
    //   Student :"Rashid"   // property
    // }
    
    
    const student = {
        names:"shahid",
        rollNo:2,
        subjects:{
            sub1:"English",
            sub2:"Urdu",
            sub3:"Math"
        },
        details(){
            return `${this.names} is a good student`
        }
    }
    
    const {names,subjects,...all}=student
    
    console.log(names)
    console.log(subjects)
    console.log(all)
console.log(student.details())

const classof10 ={
    student1 :{
    names:"naveed",
    id:4,
    classes:5
    },
studies(){
    return   `Hello this is my name ${this.student1.names}`
}
}


// console.log(classof10.studies())
// console.log(classof10.student1) 


// computed properties 
// in computed properties i can use the dynamic expression like variable or function 
// or return as an object property name  

const prefix="puser";

const sailorGroup1 = {
    sailor1:{name:"Ahmad",
work : prefix
    },
    sailor2:{name:"Naveed",
prefix : "user"
    }
}

// console.log(sailorGroup1.sailor1.name)
// console.log(sailorGroup1.sailor2.puser)

// Destructuring
// unpack values from objects or arrays in variables

const{student1:{names : [namess]}}=classof10;


console.log(namess)


// const colors = ["red", "green", "blue"];

// Unpacks sequentially
// const [first, second] = colors;
