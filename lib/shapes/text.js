import { Shape } from "./shape";

export class Text extends Shape {
  #txt = "";
  #size = 30;
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
    return `<text x="${this.getWidth() / 2 - this.#size}" y="${
      this.getHeight() / 2 + this.#size / 3
    }" fill="${this.getFill()}" stroke="${this.getBorderColor()}" stroke-width="${this.getBorderWidth()}">${
      this.#txt
    }</text>`;
  }
}

function fixText(text) {
  if (text && text.length > 2) return text.substring(0, 3);
  else return "";
}