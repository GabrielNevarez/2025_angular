import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";



let circle = new Circle(30, 40, 50);
let rectangle = new Rectangle(60, 70, 80, 90);

let shapes: Shape[] = [];
shapes.push(circle);
shapes.push(rectangle);
for (let tempShape of shapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log("===================================");
}