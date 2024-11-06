class Car {
    make: string;
    model: string;
    year: number;

    constructor(make:string,model:string,year:number){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge(){
        const date = new Date();
        const currYear = date.getFullYear();

        return currYear - this.year
    }
}

const car = new Car("Honda", "Civic", 2018);
//console.log(car.getCarAge());