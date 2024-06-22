import { shapeFactory } from "../shapes/shapeFactory.js";
import { Text } from "../shapes/text.js";

const NS = `xmlns="http://www.w3.org/2000/svg"`;

/** A builder class for an SVG object that can contain a shape and text */
export class SVGBuilder {
  //all the defaults
  #height = 0;
  #width = 0;
  #shape = "circle";
  #color = "black";
  #b = 0;
  #bc = "black";
  #txt = null;
  #txtb = 0;
  #txtbc = "white";
  #txtc = "white";
  #txtF = 30;

  /**
   *
   * @param {number} height
   * @param {number} width
   */
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
  shape(ashape) {
    this.#shape = ashape;
    return this;
  }
  shapeColor(color) {
    if (color) this.#color = color;
    return this;
  }
  shapeBorder(width) {
    if (!isNaN(width)) this.#b = width;
    return this;
  }
  shapeBorderColor(color) {
    if (color) this.#bc = color;
    return this;
  }
  text(txt) {
    this.#txt = txt;
    return this;
  }
  textColor(color) {
    if (color) this.#txtc = color;
    return this;
  }
  textBorderColor(color) {
    if (color) this.#txtbc = color;
    return this;
  }
  textBorder(width) {
    if (!isNaN(width)) this.#txtb = width;
    return this;
  }
  textFontSize(size) {
    if (!isNaN(size)) this.#txtF;
    return this;
  }

  build() {
    //need shape
    let ashape = shapeFactory(
      this.#shape,
      this.#height,
      this.#width,
      this.#color,
      this.#b,
      this.#bc
    );
    //need text
    let atext = this.#txt
      ? new Text(this.#height, this.#width, this.#txt, this.#txtF)
      : null;
    if (atext) {
      atext.setFill(this.#txtc);
      atext.setBorder(this.#txtb, this.#txtbc);
    }
    return `<svg height="${this.#height}" width="${
      this.#width
    }" ${NS}> ${ashape.render()} ${atext ? atext.render() : ""}</svg>`;
  }
}
