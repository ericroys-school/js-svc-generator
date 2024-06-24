import inquirer from "inquirer";
import { QUESTIONS } from "./questions.js";

/**
 * Call the Q&A logic to ask the user questions in 
 * required order/condition
 * @returns {} answers to the questions
 */
export async function getAnswers() {
  let len = Object.keys(QUESTIONS).length;
  let response = {};
  
  //iterate the questions
  for (let i = 1; i < len; i++) {
    // console.log(`i=${i}, condition = ${QUESTIONS[i].condition}, question = ${JSON.stringify(QUESTIONS[i].question)}`)
    // console.log( QUESTIONS[i].condition(response))

    //add answer to the response only run if the question condition is true
    if (QUESTIONS[i].condition(response)) {
      response = {
        ...response,
        ...(await inquirer.prompt(QUESTIONS[i].question)),
      };
      // console.log(`i=${i}, NEXT=${QUESTIONS[i].next}`);
      // this provides sequencing for skipping past the conditionals
      i = QUESTIONS[i].next - 1;
    }
    // console.log(response)
  }
  return response;
}

// getAnswers();