//create a interface for Profile
interface Profile {
    name: string;
    age : number;
    email : string;
}
//creating types for updating the object that takes Profile types key as a partial property. If the property is not available on the valueObj then it will show the error. 
type ValueObj = Partial<Profile>

//updator function
const updateProfile = (objToUpdate:Profile,valueObj:ValueObj) =>{
    return{...objToUpdate,...valueObj}
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
//console.log(updateProfile(myProfile, {age: 20,email:'jdwwsd' }));