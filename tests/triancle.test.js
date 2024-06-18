import { expect } from "@jest/globals";
import { Triangle } from "../lib/triangle";

describe("Triangle tests", () => {
  describe("Not null constructor test", () => {
    it("Should not have a null object when properly constructed", () => {
      let s = new Triangle(10, 12);
      expect(s).not.toBeNull();
    });
  });
  describe("Get path for the triangle", () => {
    it("", () => {
      let s = new Triangle(100, 100);
      let expected = `M50 2 L2 100 L98 100 Z`;
      let d = `M${s.getWidth() / 2} ${s.getBorderWidth() + 2} L${
        s.getBorderWidth() + 2
      } ${s.getHeight()} L${
        s.getWidth() - (s.getBorderWidth() + 2)
      } ${s.getHeight()} Z`;
      expect(d).toEqual(expected);
    });
  });
});

{/* <svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 3 L3 300 L197 300 Z" style="fill:orange;stroke:green;stroke-width:1" />
  <text x="60" y="200" fill="pink" stroke="blue" font-size="35">SVG!</text>
  Sorry, your browser does not support inline SVG.
</svg> */}