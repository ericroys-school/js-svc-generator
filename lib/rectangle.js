import { Shape } from "./shape";

export class Rectangle extends Shape{

    #x = 0; 
    #y = 0;
    #radius = 0;

    constructor(height, width, x, y){
        super(height, width);
        if(!isNaN(x)) this.#x = x;
        if(!isNaN(y)) this.#y = y;
    }

    setPositionX(x){
        if(!isNaN(x)) this.#x = x;
    }
    getPositionX(){
        return this.#x;
    }
    setPositionY(y){
        if(!isNaN(y)) this.#y = y;
    }
    getPositionY(){
        return this.#y;
    }
    setRounded(radius){
        if(!isNaN(radius)) this.#radius = radius;
    }
    getRounded(){
        return this.#radius;
    }
}