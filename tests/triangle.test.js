import { expect } from "@jest/globals";
import { Triangle } from "../lib/shapes/triangle.js";

describe("Triangle tests", () => {
  describe("Not null constructor test", () => {
    it("Should not have a null object when properly constructed", () => {
      let s = new Triangle(10, 12);
      expect(s).not.toBeNull();
    });
  });
  describe("Get path for the triangle", () => {
    it("Path should return appropriate string based on algorithm", () => {
      /* Algorithm should match
      `M${this.getWidth() / 2} ${this.getBorderWidth() + 2} L${
        this.getBorderWidth() + 2
      } ${this.getHeight()} L${
        this.getWidth() - (this.getBorderWidth() + 2)
      } ${this.getHeight()} Z`;      
      */
      
      let s = new Triangle(100, 100);
      let expected = `M50 2 L2 100 L98 100 Z`;
      expect(s.getPath()).toEqual(expected);
      s.setBorder(5, "brown");
      expect(s.getPath()).toEqual(`M50 7 L7 100 L93 100 Z`);
      s = new Triangle(300, 200);
      s.setBorder(10, "blue");
      expect(s.getPath()).toEqual(`M100 12 L12 300 L188 300 Z`);
    });
  });
});

{/* <svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 3 L3 300 L197 300 Z" style="fill:orange;stroke:green;stroke-width:1" />
  <text x="60" y="200" fill="pink" stroke="blue" font-size="35">SVG!</text>
  Sorry, your browser does not support inline SVG.
</svg> */}