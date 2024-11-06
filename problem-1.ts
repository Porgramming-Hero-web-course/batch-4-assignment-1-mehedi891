//declaring the function type that receives a number array and return the number value

type SumArrtype = (num:number[])=>number;

//Declaring the function that types is SumArrType
const  sumArray : SumArrtype = (numsArr) =>{
    let sum: number = 0;
    numsArr.forEach((num: number) => {
        sum = sum + num;
    });

    return sum;
}



//declare a const variable with number Array types
const arrNum:number[] = [1,2,3,4,5];


//Checking the sumArray function 
const result = sumArray(arrNum);

//console.log(result)



