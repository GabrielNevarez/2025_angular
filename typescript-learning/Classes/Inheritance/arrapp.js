"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var shape = new Shape_1.Shape(10, 20);
var circle = new Circle_1.Circle(30, 40, 50);
var rectangle = new Rectangle_1.Rectangle(60, 70, 80, 90);
var shapes = [];
shapes.push(shape);
shapes.push(circle);
shapes.push(rectangle);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var tempShape = shapes_1[_i];
    console.log(tempShape.getInfo());
}
