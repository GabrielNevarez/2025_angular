import { Shape } from "./Shape";

export class Rectangle extends Shape {
    
    constructor (x:number, y:number, private _width: number, private _length: number) {
        super(x, y);
    }

    get ():number{
        return this._width;
    }
    set (width :number){
        this._width = width;
    }
    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }
    getInfo ():string{
        return super.getInfo() + `,width=${this._width}, Length${this._length}`;
    }
 
}