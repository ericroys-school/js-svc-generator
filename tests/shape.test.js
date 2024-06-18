import { expect } from "@jest/globals";
import { Shape } from "../lib/shape.js";

describe("Shape tests", () => {
  describe("Not null constructor test", () => {
    it("Should not have a null object when properly constructed", () => {
      let s = new Shape(10, 12);
      expect(s).not.toBeNull();
    });
  }),
    describe("invalid size check", () => {
      it("should throw error if height/width invalid", () => {
        expect(() => new Shape("x", "y")).toThrow();
        expect(() => new Shape("x", 1)).toThrow();
        expect(() => new Shape(1, "y")).toThrow();
      });
    }),
    describe("height get/set", () => {
      it("should be height set by constructor", () => {
        let s = new Shape(10, 12);
        expect(s.getHeight()).toBe(10);
        //reset to new val
        s.setHeight(22);
        expect(s.getHeight()).toBe(22);
        //reset to bad val
        s.setHeight("x");
        expect(s.getHeight()).toBe(22);
      });
    }),
    describe("width get/set", () => {
      it("should be width set by constructor", () => {
        let s = new Shape(1, 10);
        expect(s.getWidth()).toBe(10);
        //reset to new val
        s.setWidth(22);
        expect(s.getWidth()).toBe(22);
        //reset to bad val
        s.setWidth("x");
        expect(s.getWidth()).toBe(22);
      });
    });
  describe("fill get/set", () => {
    it("should be set/get properly", () => {
      let s = new Shape(1, 10);
      s.setFill("blue");
      expect(s.getFill()).toBe("blue");
    });
  });
  describe("setBorder check", () => {
    it("should be able to set width and color and use individual getters", () => {
      let s = new Shape(1, 10);
      s.setBorder(5, "purple");
      expect(s.getBorderColor()).toBe("purple");
      expect(s.getBorderWidth()).toBe(5);
    });
  });
  describe("setBorderColor check", () => {
    it("should be able to set border color individually and use individual getter", () => {
      let s = new Shape(1, 10);
      s.setBorderColor("gray");
      expect(s.getBorderColor()).toBe("gray");
    });
  });
  describe("setBorderWidth check", () => {
    it("should be able to set border width individually and use individual getter", () => {
      let s = new Shape(1, 10);
      s.setBorderWidth(2);
      expect(s.getBorderWidth()).toEqual(2);
      //invalid
      s.setBorderWidth("something");
      expect(s.getBorderWidth()).toEqual(2);
    });
  });
  describe("setOpacity check", () => {
    it("should be able to set opacity and use individual getter", () => {
      let s = new Shape(1, 10);
      //validate default (0)
      expect(s.getOpacity()).toBe(0);
      //invalid number (should be 0-1) should not update
      s.setOpacity(75);
      expect(s.getOpacity()).toBe(0);
      s.setOpacity(0.22);
      expect(s.getOpacity()).toBe(0.22);
    });
  });
});
