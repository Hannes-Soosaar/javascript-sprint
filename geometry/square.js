import { Rectangle } from "./rectangle";

export class Square extends Rectangle {
    constructor(side){
        super(width,height);
        this.width=side;
        this.height=side;
        this.side = side;
    }

}

export const square = new Square(4);
export const rectangle = new Rectangle(5,3)