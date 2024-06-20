import { Square } from "../lib/square.js";

describe('Square Tests', () => {
    describe("Not null constructor test", () => {
        it("Should not have a null object when properly constructed", () => {
          let s = new Square(10, 0, 0);
          expect(s).not.toBeNull();
        });
      })
      describe("Height/Width same", () => {
        it("Should not have same height/width values", () => {
          let s = new Square(10, 0, 0);
          expect(s.getHeight()).toEqual(s.getWidth());
          expect(s.getHeight()).toEqual(10);
        });
      })
      describe("Render override", ()=> {
        it("should render a rect object with appropriate tags and be a square", ()=> {
          let s = new Square(300, 5, 4);
          s.setBorder(5, "blue");
          s.setFill("orange");
          let expected = `<rect x="5" y="4" height="300" width="300" stroke="blue" stroke-width="5" fill="orange"/>`
          expect(s.render()).toBe(expected);

        })
      })
});
