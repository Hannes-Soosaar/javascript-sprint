import { Rectangle } from "./rectangle";

class Square extends Rectangle {
    constructor(side){
        super(width,height)
        this.side = side
    }

}

export const square = new Square(4);
export const rectangle = new Rectangle(5,3)