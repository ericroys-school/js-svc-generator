import { getAnswers } from "./lib/questions/questionReader.js";
import { SVGBuilder } from "./lib/svg/svgBuilder.js";
import { writer } from "./lib/writers/writer.js";

//clear the terminal/screen
console.clear();
//output message of what we are doing
console.log(`\n\n${"*".repeat(60)}
The svg generator will automatically create
an SVG file for you by asking questions and 
then utilizing your responses. The new logo.svg 
file will be written into the output directory
${"*".repeat(60)}\n\n`);

//call Q & A because not all answers are 42
const { logoTxt, textColor, textBorderWidth, 'text borderColor': textBorderColor,
        shape, shapeColor, shapeBorderWidth, 'shape borderColor': shapeBorderColor,
        height, width, fontSize } =
  await getAnswers();

//build the svg from the answers
const builder = new SVGBuilder(height || 200, width || 300)
  .shape(shape)
  .shapeColor(shapeColor)
  .shapeBorderColor(shapeBorderColor)
  .shapeBorder(shapeBorderWidth)
  .text(logoTxt)
  .textColor(textColor)
  .textFontSize(fontSize)
  .textBorder(textBorderWidth)
  .textBorderColor(textBorderColor);

const r = writer();
r.write(builder.build());

console.clear();
console.log("\n\nGenerated ./output/logo.svg");
