import { Shape } from "./shape.js";

/**
 * A Circle
 */
export class Circle extends Shape {
  /**
   * Construct a circle
   * @param number height
   * @param number width
   */
  constructor(height, width) {
    super(height, width);
  }

  render() {
    let s =
      this.getHeight() < this.getWidth() ? this.getHeight() : this.getWidth();
    return (
    `<circle r="${s / 2}" cx="${s / 2}" cy="${s / 2}" fill="${this.getFill()}" stroke="${this.getBorderColor()}" stroke-width="${this.getBorderWidth()}"/>`);
  }
}
