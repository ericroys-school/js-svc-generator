import inquirer from "inquirer";
import { QUESTIONS } from "./questions.js";

export async function getAnswers() {
  let len = Object.keys(QUESTIONS).length;
  let response = {};
  for (let i = 1; i < len; i++) {
    // console.log(`i=${i}, condition = ${QUESTIONS[i].condition}, question = ${JSON.stringify(QUESTIONS[i].question)}`)
    // console.log( QUESTIONS[i].condition(response))
    if (QUESTIONS[i].condition(response)) {
      response = {
        ...response,
        ...(await inquirer.prompt(QUESTIONS[i].question)),
      };
      // console.log(`i=${i}, NEXT=${QUESTIONS[i].next}`);
      i = QUESTIONS[i].next - 1;
    }
    // console.log(response)
  }
  return response;
}

// getAnswers();