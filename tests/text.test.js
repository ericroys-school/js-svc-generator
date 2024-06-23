import { Text } from "../lib/shapes/text.js";

describe("Text tests", () => {
  describe("Not null constructor test", () => {
    it("Should not have a null object when properly constructed", () => {
      let s = new Text(10, 12, "Bob");
      expect(s).not.toBeNull();
    });
  });
  describe("Render override", () => {
    it("should render a text object with appropriate tags", () => {
      let height = 300,
        width = 300;
      let fontSize = 35;
      let s = new Text(height, width, "Bob", fontSize);
      s.setBorder(5, "blue");
      s.setFill("orange");
      let expected = `<text x="${width / 2 - fontSize}" y="${
        height / 2 + fontSize / 3
      }" fill="orange" stroke="blue" stroke-width="5" font-size="35">Bob</text>`;
      expect(s.render()).toBe(expected);
    });
  });
});
