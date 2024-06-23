import { getColors, isValidHexColor } from "../colors.js";

export const QUESTIONS =
{
    1: {
        condition: ()=> true, 
        question:  
         {
           type: "confirm",
           message: "Would you to use default sizing (300 x 200)?",
           name: "isDefaultSize",
           default: true,
         },
       
       next: 2
       },
    2: {
        condition:  (response) => !response.isDefaultSize,
       question: [
           {
             type: "number",
             name: "height",
             message: "Enter a height... ",
             validate: (value) => value > 0 || "The height value is invalid",
           },
           {
             type: "number",
             name: "width",
             message: "Enter a width... ",
             validate: (value) => value > 0 || "The width value is invalid",
           },
         ],
       next: 3
       },
    3: {
        condition: ()=> true,
        question: 
         {
           type: "input",
           message: "Provide text for the logo...",
           name: "logoTxt",
           validate: (value) =>
             value.length > 3 || value.length < 1
               ? "Text should be provided and not more than three chars"
               : true,
         }
       ,
       next: 4 
       },
    4: {
        condition: ()=> true,
        question: useColorPromptQuestion("text"),
        next: 5 
    },
    5: {
        condition: (response)=> response.isListColor,
        question: getColorQuestion("text"),
        next: 7 
    },
    6: {
        condition: (response)=> !response.isListColor,
        question: getHexQuestion("text"),
        next: 7
       },
    7: {
        condition: ()=> true, 
        question: 
         {
           type: "confirm",
           message: "Would you like to use default font size (30)?",
           name: "isDefaultSize",
           default: true,
         },
       
       next: 8
       },
    8: {
        condition: (response)=> !response.isDefaultSize,
        question: {
            type: "number",
            name: "fontSize",
            message: "Enter a font size... ",
            validate: (value) => value > 0 || "The size value is invalid",
          },
        next: 9
    },
    9: {
        condition: ()=> true,
        question: useBorderQuestion("text"),
        next: 10 
       },
    10: {
        condition: (response)=> response.isBorder,
        question: 
            getBorderWidthQuestion("text"),
        next: 11
        },
    11: {
        condition: (response)=> response.isBorder,
        question: useColorPromptQuestion("text border"),
        next: 12
    },
    12: {
        condition: (response)=> response.isBorder && response.isListColor,
        question: getColorQuestion("text border"),
        next: 14
    },
    13: {
        condition: (response)=> response.isBorder && !response.isListColor,
        question: getHexQuestion("text border"),
        next: 14
    },
    14: {
        condition: ()=> true,
        question: {
            type: "list",
            message: "Select a shape...",
            name: "shape",
            choices: ["circle", "square", "triangle"],
            default: "circle",
          },
        next: 15
    },
    15: {
        condition: ()=> true,
        question: useColorPromptQuestion("shape"),
        next: 16
    },
    16: {
        condition: (response)=> response.isListColor,
        question: getColorQuestion("shape"),
        next: 18
    },
    17: {
        condition: (response)=> !response.isListColor,
        question: getHexQuestion("shape"),
        next: 18
    },
    18: {
        condition: ()=> true,
        question: useBorderQuestion("shape"),
        next: 19
    },
    19: {
        condition: (response)=> response.isBorder,
        question: getBorderWidthQuestion("shape"),
        next: 20
    },
    20: {
        condition: (response)=> response.isBorder,
        question: useColorPromptQuestion("shape border"),
        next: 21
    },
    21: {
        condition: (response)=> response.isBorder && response.isListColor,
        question: getColorQuestion("shape border"),
        next: 23
    },
    22: {
        condition: (response) => response.isBorder && response.isListColor,
        question: getHexQuestion("shape border"),
        next: 23
    },
   }




   function getHexQuestion(label) {
    return {
      type: "input",
      message: `Provide a hexidecimal ${label} color...`,
      name: `${label}Color`,
      validate: (value) =>
        isValidHexColor(value) || "Entered value is not valid hex",
    };
  }
  
  function getColorQuestion(label) {
    return {
      type: "list",
      message: `Select a ${label} color...`,
      name: `${label}Color`,
      choices: getColors(),
    };
  }
  
  function getBorderWidthQuestion(label) {
    return {
      type: "number",
      message: `Select a ${label} border width...`,
      name: `${label}BorderWidth`,
      validate: (value) => {
        if(value < 1 || value > 10) return "Enter a number between 1-10";
        return true;
      },
    };
  }
  
  function useColorPromptQuestion(label) {
    return {
      type: "confirm",
      message: `Would you like to select a ${label} color from a list?`,
      name: "isListColor",
      default: true,
    };
  }
  
  function useBorderQuestion(label) {
    return {
      type: "confirm",
      message: `Would you like to add a border for the ${label}?`,
      name: "isBorder",
      default: true,
    };
  }