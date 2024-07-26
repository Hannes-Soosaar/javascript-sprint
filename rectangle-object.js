import { Rectangle } from "./rectangle";
import rectangle1 from "./rectangle";

const rectObj = {
    width:50,
    height:30,
    area(){
        return this.width*this.height;
    },
    perimeter(){
        return 2*(this.width+this.height);
    }
}