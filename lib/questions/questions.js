import { getColors, isValidHexColor } from "../colors.js";
import inquirer from "inquirer";

/**
 * Display and receive input to various questions
 * @returns {answers}
 */
export async function getAnswers() {
  let response = {};
  //ask the questions

  response = {
    ...response,
    ...(await inquirer.prompt([
      {
        type: "confirm",
        message: "Would you to use default sizing (300 x 200)?",
        name: "isDefaultSize",
        default: true,
      },
    ])),
  };

  if (!response.isDefaultSize) {
    response = {
      ...response,
      ...(await inquirer.prompt([
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
      ])),
    };
  }

  response = {
    ...response,
    ...(await inquirer.prompt([
      {
        type: "input",
        message: "Provide text for the logo...",
        name: "logoTxt",
        validate: (value) =>
          value.length > 3 || value.length < 1
            ? "Text should be provided and not more than three chars"
            : true,
      },
      useColorPromptQuestion('text')
    ])),
  };

  


  response.isListColor ? 
    response = {
      ...response,
      ...(await inquirer.prompt(
        getColorQuestion('text'),
      )),
    }
  :
    response = {
      ...response,
      ...(await inquirer.prompt(getHexQuestion('text'))),
    }

    response = {
        ...response,
        ...(await inquirer.prompt([
          {
            type: "confirm",
            message: "Would you like to use default font size (35)?",
            name: "isDefaultSize",
            default: true,
          },
        ])),
      };

    if (!response.isDefaultSize) {
    response = {
      ...response,
      ...(await inquirer.prompt(
        {
          type: "number",
          name: "fontSize",
          message: "Enter a font size... ",
          validate: (value) => value > 0 || "The size value is invalid",
        }
      )),
    };
  }
  response = {
    ...response,
    ...(await inquirer.prompt([
      {
        type: "list",
        message: "Select a shape...",
        name: "shape",
        choices: ["circle", "square", "triangle"],
        default: "circle",
      },
      useColorPromptQuestion('shape'),
    ])),
  };

  response.isListColor
    ? (response = {
        ...response,
        ...(await inquirer.prompt(getColorQuestion("shape"))),
      })
    : (response = {
        ...response,
        ...(await inquirer.prompt(getHexQuestion("shape"))),
      });

  console.log(response);
  return response;
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

function useColorPromptQuestion(label){
    return {
        type: "confirm",
        message: `Would you like to select a ${label} color from a list?`,
        name: "isListColor",
        default: true,
      }
}

getAnswers();
