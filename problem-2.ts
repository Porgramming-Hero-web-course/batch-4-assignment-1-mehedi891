//define the function type 
type RemoveDuplicate = (arr:number[]) => number[];

//define the function
const removeDuplicates:RemoveDuplicate = (arr) =>{
    let newArr:number[] = [];
    let checkNum = 0;
    arr.forEach((element:number) => {
        if(element !== checkNum){
            newArr.push(element);
            checkNum = element;
        }
    });

    return newArr;
}

const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

//console.log(result)

