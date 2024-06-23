import { Triangle } from "../lib/shapes/triangle.js";
import { SVGBuilder } from "../lib/svg/svgBuilder.js";

describe("SVG Builder tests", () => {
  describe("Not null constructor test", () => {
    it("Should not have a null object when properly constructed", () => {
      let s = new SVGBuilder(10, 12);
      expect(s).not.toBeNull();
    });
  });
  describe("All the build methods", () => {
    it("Should build an svg with defaults when no options entered", () => {
      let s = new SVGBuilder(10, 12);
      let d = `<svg height="10" width="12" xmlns="http://www.w3.org/2000/svg"> <circle r="5" cx="5" cy="5" fill="black" stroke="black" stroke-width="0"/> </svg>`;
      expect(s.build()).toEqual(d);
    });
    it("Should build svg with square, no text", ()=> {
        let s = new SVGBuilder(300, 200)
        .shape('square')
        .shapeBorder(2)
        .shapeBorderColor("orange")
        .shapeColor("blue");

        let d = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg"> <rect x="0" y="0" height="200" width="200" stroke="orange" stroke-width="2" fill="blue"/> </svg>`
        expect(s.build()).toEqual(d);
    })
    it("Should build svg with square and text", ()=> {
        let s = new SVGBuilder(300, 200)
        .shape('square')
        .shapeBorder(2)
        .shapeBorderColor("orange")
        .shapeColor("blue")
        .text("BOB")
        .textBorder(2)
        .textColor("blue")
        .textBorderColor("orange")
        let d = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg"> <rect x="0" y="0" height="200" width="200" stroke="orange" stroke-width="2" fill="blue"/> <text x="40" y="170" fill="blue" stroke="orange" stroke-width="2" font-size="60">BOB</text></svg>`
        expect(s.build()).toEqual(d);
    })
    it("Should build svg with circle, no text", ()=> {
        let s = new SVGBuilder(300, 200)
        .shape('circle')
        .shapeBorder(2)
        .shapeBorderColor("orange")
        .shapeColor("blue");

        let d = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg"> <circle r="100" cx="100" cy="100" fill="blue" stroke="orange" stroke-width="2"/> </svg>`    
        expect(s.build()).toEqual(d);
    })
    it("Should build svg with circle with text", ()=> {
        let s = new SVGBuilder(300, 200)
        .shape('circle')
        .shapeBorder(2)
        .shapeBorderColor("orange")
        .shapeColor("blue")
        .text("BOB")
        .textBorder(2)
        .textColor("blue")
        .textBorderColor("orange")

        let d = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg"> <circle r="100" cx="100" cy="100" fill="blue" stroke="orange" stroke-width="2"/> <text x="40" y="170" fill="blue" stroke="orange" stroke-width="2" font-size="60">BOB</text></svg>`
        expect(s.build()).toEqual(d);
    })    
    it("Should build svg with triangle, no text", ()=> {
        let s = new SVGBuilder(300, 200)
        .shape('triangle')
        .shapeBorder(2)
        .shapeBorderColor("orange")
        .shapeColor("blue");
        let d = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg"> <path d="M100 4 L4 300 L196 300 Z" stroke="orange" stroke-width="2" fill="blue"/> </svg>`
        expect(s.build()).toEqual(d);
    })
    it("Should build svg with triangle with text", ()=> {
        let s = new SVGBuilder(300, 200)
        .shape('triangle')
        .shapeBorder(2)
        .shapeBorderColor("orange")
        .shapeColor("blue")
        .text("BOB")
        .textBorder(2)
        .textColor("blue")
        .textBorderColor("orange");

        console.log(s.build())
        let d = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg"> <path d="M100 4 L4 300 L196 300 Z" stroke="orange" stroke-width="2" fill="blue"/> <text x="40" y="170" fill="blue" stroke="orange" stroke-width="2" font-size="60">BOB</text></svg>`
        expect(s.build()).toEqual(d);
    })
  });
});
