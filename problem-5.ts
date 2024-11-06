
// type GTY = <T,X extends keyof T > (givenObj:T,key:X) => any;
// const getProperty:GTY = (givenObj,key) =>{
//     return givenObj[key]
// }


// generic type and declare and check the object key is availabe or not
const getProperty = <T,X extends keyof T > (givenObj:T,key:X) =>{
    return givenObj[key]
}



const person = { model: "Alice", klk: 30,klkl:'sas'};
console.log(getProperty(person, "klk"));