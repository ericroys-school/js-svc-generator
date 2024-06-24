import { Shape } from "./shape.js";

export class Text extends Shape {
  #txt = "";
  #size = 60;
  /**
   * Create text
   * @param {number} height
   * @param {number} width
   * @param {string} text
   * @param {number} size of font
   */
  constructor(height, width, text, size) {
    super(height, width);
    this.#txt = fixText(text);
    if (!isNaN(size) && size > -1) this.#size = size;
  }
  getText() {
    return this.#txt;
  }
  setText(text) {
    this.#txt = fixText(text);
  }
  render() {
    let s =
    this.getHeight() < this.getWidth() ? this.getHeight() : this.getWidth();

    return `<text x="${s / 2}" y="${
      s / 2}" dominant-baseline="middle" text-anchor="middle" fill="${this.getFill()}" stroke="${this.getBorderColor()}" stroke-width="${this.getBorderWidth()}" font-size="${this.#size}">${
      this.#txt
    }</text>`;
  }
}

function fixText(text) {
  if (text && text.length > 2) return text.substring(0, 3);
  else return "";
}
