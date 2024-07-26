export class Triangle{
    constructor(sideA, sideB, sideC){
        this.sideA= sideA;
        this.sideB= sideB;
        this.sideC=sideC;
    }
    area(){
        let semiPerimeter = (this.sideA+this.sideB+this.sideC)/2
        let area =Math.sqrt(semiPerimeter*(semiPerimeter-this.sideA)*(semiPerimeter-this.sideB)*(semiPerimeter-this.sideC))
        return area;
    }
    perimeter(){
        return this.sideA+this.sideB+this.sideC
    }
}

export const triangle = new Triangle(3,4,5);