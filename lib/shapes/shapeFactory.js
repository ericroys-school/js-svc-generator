import { Circle } from "./circle.js";
import { Square } from "./square.js";
import { Triangle } from "./triangle.js";

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
