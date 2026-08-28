// Map()
const pets=[
    {name:"tony",type:"cat"},
    {name:"spot",type:"pigeon"},
    {name:"tiger",type:"cat"}
    
]
const names = [1,2,3,4,5];
const newArr = names.map(addsNext);
console.log(newArr);

function addsNext(nam){
return nam+"b"
}

// filter()
// const evens = items.filter(x => x % 2 === 0); 


// reduce()
// takes two arguments 1.a call back function and initial value

const aa =names.reduce((a,b)=>{ //accumulator =ongoing total and the current value=current item in the array
    return a+b
},0 )//starting value/point

// console.log(aa)

const finds = pets.find(petss=> petss.type=="cat");
console.log(finds)




