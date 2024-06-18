import { expect } from "@jest/globals";
import { Rectangle } from "../lib/rectangle";


describe("Rectangle tests", () => {
    describe("Not null constructor test", () => {
      it("Should not have a null object when properly constructed", () => {
        let s = new Rectangle(10, 12, 0, 0);
        expect(s).not.toBeNull();
      });
    })
    describe("Default x & y", () => {
        it("Should not accept non numbers for x & y", () => {
          let s = new Rectangle(10, 12, "x", "y");
          //default of x & y are both zero
          expect(s.getPositionX()).toBe(0);
          expect(s.getPositionY()).toBe(0);

          s.setPositionX(33);
          s.setPositionY(44);
          expect(s.getPositionX()).toBe(33);
          expect(s.getPositionY()).toBe(44);
        });
      })
      describe("Default and set/get rounded", () => {
        it("Should not accept non numbers for radius and default to zero", () => {
          let s = new Rectangle(10, 12, 11, 22);
          //default 
          expect(s.getRounded()).toBe(0);


          s.setRounded(33);
          expect(s.getRounded()).toBe(33);
  
        });
      })
});

{/* <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="blue" />
</svg> */}