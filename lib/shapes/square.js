import { Rectangle } from "./rectangle";

/**
 * A square object
 */
export class Square extends Rectangle{
    /**
     * Create a square
     * @param number size 
     * @param number x - x from top left
     * @param number y - y from top left
     */
    constructor(size, x, y){
        super(size, size, x, y);
    }
}