//type define
type CountWord = (para1:string,para2:string) => number;


const countWordOccurrences : CountWord = (givenString,hasString) =>{
    const givenStringLower = givenString.toLowerCase();
    const hasStringLower = hasString.toLowerCase();
    const hasStringLowerRegex = new RegExp(`\\b${hasStringLower}\\b`, 'g');
    const count = givenStringLower.match(hasStringLowerRegex);
    //console.log(count)
    return count?.length ?? 0;
}


const result = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");

//console.log(result)

