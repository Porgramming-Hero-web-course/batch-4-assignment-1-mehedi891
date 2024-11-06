
const validateKeys = <T extends object,X extends keyof T>(obj:T,keys:X[]): boolean =>{
    //console.log(keys)
    const hasKey = keys.every(key => key in obj);
//console.log(hasKey)
    return hasKey
}

const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name"]));