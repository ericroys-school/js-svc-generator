import { Shape } from "./shape.js";

/**
 * A Triangle
 */
export class Triangle extends Shape {
    /**
     * Construct a triangle
     * @param number height 
     * @param number width 
     */
  constructor(height, width) {
    super(height, width);
  }
  /**
   * 
   * @returns string of the triangle path
   */
  getPath() {
    return `M${this.getWidth() / 2} ${this.getBorderWidth() + 2} L${
      this.getBorderWidth() + 2
    } ${this.getHeight()} L${
      this.getWidth() - (this.getBorderWidth() + 2)
    } ${this.getHeight()} Z`;
  }
  render(){
    return (
    `<path d="${this.getPath()}" stroke="${this.getBorderColor()}" stroke-width="${this.getBorderWidth()}" fill="${this.getFill()}"/>`
    )
  }
}
