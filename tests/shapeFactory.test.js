import { shapeFactory } from "../lib/shapeFactory.js";

describe("Shape Factory tests", () => {
  describe("Factor a square with defaults", () => {
    it("The factory should squirt out a square", () => {
      let s = shapeFactory("square", 10, 10);
      expect(s).not.toBeNull();
      expect(s.getBorderColor()).toBe("black");
      expect(s.getBorderWidth()).toBe(0);
      expect(s.getHeight()).toBe(10);
      expect(s.getWidth()).toBe(10);
      expect(s.getFill()).toBe("white");
    });
  });
  describe("Factor a square with values", () => {
    it("The factory should squirt out a square with the lesser of the height/width", () => {
      let s = shapeFactory("square", 10, 12, "purple", 5, "red");
      expect(s).not.toBeNull();
      expect(s.getBorderColor()).toBe("red");
      expect(s.getBorderWidth()).toBe(5);
      expect(s.getHeight()).toBe(10);
      expect(s.getWidth()).toBe(10);
      expect(s.getFill()).toBe("purple");
    });
  });
  describe("Factor a triangle with defaults", () => {
    it("The factory should squirt out a triangle", () => {
      let s = shapeFactory("triangle", 10, 12);
      expect(s).not.toBeNull();
      expect(s.getBorderColor()).toBe("black");
      expect(s.getBorderWidth()).toBe(0);
      expect(s.getHeight()).toBe(10);
      expect(s.getWidth()).toBe(12);
      expect(s.getFill()).toBe("white");
    });
  });
  describe("Factor a triangle with values", () => {
    it("The factory should squirt out a triangle", () => {
      let s = shapeFactory("triangle", 10, 12, "purple", 5, "red");
      expect(s).not.toBeNull();
      expect(s.getBorderColor()).toBe("red");
      expect(s.getBorderWidth()).toBe(5);
      expect(s.getHeight()).toBe(10);
      expect(s.getWidth()).toBe(12);
      expect(s.getFill()).toBe("purple");
    });
  });
  describe("Factor a circle with defaults", () => {
    it("The factory should squirt out a circle", () => {
      let s = shapeFactory("circle", 10, 10);
      expect(s).not.toBeNull();
      expect(s.getBorderColor()).toBe("black");
      expect(s.getBorderWidth()).toBe(0);
      expect(s.getHeight()).toBe(10);
      expect(s.getWidth()).toBe(10);
      expect(s.getFill()).toBe("white");
    });
  });
  describe("Factor a circle with values", () => {
    it("The factory should squirt out a circle", () => {
      let s = shapeFactory("circle", 10, 12, "purple", 5, "red");
      expect(s).not.toBeNull();
      expect(s.getBorderColor()).toBe("red");
      expect(s.getBorderWidth()).toBe(5);
      expect(s.getHeight()).toBe(10);
      expect(s.getWidth()).toBe(12);
      expect(s.getFill()).toBe("purple");
    });
  });
  describe("invalid or unsupported shape check", () => {
    it("should throw error if shape is invalid or not one factory supports", () => {
        expect(() => shapeFactory("")).toThrow();      
        expect(() => shapeFactory(null)).toThrow();
        expect(() => shapeFactory("x")).toThrow();
        expect(() => shapeFactory(undefined)).toThrow();

    });
  })
});
