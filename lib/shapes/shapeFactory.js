import { Circle } from "./circle.js";
import { Square } from "./square.js";
import { Triangle } from "./triangle.js";

/**
 * A factory for building shapes
 * @param {string} shape (one of 'circle', 'triangle', 'square')
 * @param {number} height 
 * @param {number} width 
 * @param {string} color 
 * @param {number} border 
 * @param {string} borderColor 
 * @returns 
 */
export const shapeFactory = (
  shape,
  height,
  width,
  color,
  border,
  borderColor
) => {
  if (!shape || shape.length < 1) throw "Shape requested is invalid";
  let s;
  switch (shape.toLowerCase()) {
    case "square":
      s = new Square(height > width ? width : height);
      break;

    case "triangle":
      s = new Triangle(height, width);
      break;

    case "circle":
      s = new Circle(height, width);
      break;

    default:
      throw `Unable to find the factory for the shape ${shape}`;
  }
  s.setBorder(border, borderColor);
  s.setFill(color);
  return s;
};
