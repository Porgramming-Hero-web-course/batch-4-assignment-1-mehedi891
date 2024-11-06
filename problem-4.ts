//type define for circle

type Circle = {
    shape: 'circle';
    radius:number;
}

type Rectangle = {
    shape: 'rectangle';
    width:number;
    height:number;
}

type CalculateAreaType = (areaObj: Circle | Rectangle) => number;

const calculateShapeArea : CalculateAreaType = (areaDetails) =>{
    if('radius' in areaDetails){

        const area:number = Math.PI*areaDetails.radius*areaDetails.radius;
        return Number(area.toFixed(2));
    }else{
        return areaDetails.width*areaDetails.height
    }
    
} 

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
console.log(rectangleArea)