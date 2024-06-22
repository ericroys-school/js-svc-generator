import { Circle } from "../lib/shapes/circle.js";

describe("Circle Tests", () => {
  describe("Not null constructor test", () => {
    it("Should not have a null object when properly constructed", () => {
      let s = new Circle(300, 200);
      expect(s).not.toBeNull();
    });
  });
  describe("Render override", () => {
    it("should render a rect object with appropriate tags and be a square", () => {
      let s = new Circle(300, 200);
      s.setBorder(5, "blue");
      s.setFill("orange");
      let expected = `<circle r="100" cx="100" cy="100" fill="orange" stroke="blue" stroke-width="5"/>`;
      expect(s.render()).toBe(expected);
    });
  });
});
