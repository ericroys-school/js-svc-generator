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
      let s =
    this.getHeight() < this.getWidth() ? this.getHeight() : this.getWidth();
      `M${s / 2} ${this.getBorderWidth() + 2} L${
        this.getBorderWidth() + 2
      } ${s} L${
        this.getWidth() - (this.getBorderWidth() + 2)
      } ${s} Z`;      
      */
      
      let s = new Triangle(100, 100);
      let expected = `M50 2 L2 100 L98 100 Z`;
      expect(s.getPath()).toEqual(expected);
      s.setBorder(5, "brown");
      expect(s.getPath()).toEqual(`M50 7 L7 100 L93 100 Z`);
      s = new Triangle(300, 200);
      s.setBorder(10, "blue");
      expect(s.getPath()).toEqual(`M100 12 L12 200 L188 200 Z`);
    });
  });
});