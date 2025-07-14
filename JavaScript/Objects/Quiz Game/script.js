const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "Which country has the most natural lakes?",
    choices: ["Canada", "Russia", "Brazil"],
    answer: "Canada"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Math",
    question: "What is the square root of 64?",
    choices: ["8", "6", "10"],
    answer: "8"
  },
  {
    category: "Computer Science",
    question: "How many bits are there in a byte?",
    choices: ["4", "8", "16"],
    answer: "4"
  }
];

function getRandomQuestion(questions) {
  const index = Math.floor(Math.random() * questions.length);
  return questions[index];
}

function getRandomComputerChoice(choices) {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getResults(questionObject, computerChoice) {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}

const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Question:", randomQuestion.question);
console.log("Computer chose:", computerChoice);
console.log(getResults(randomQuestion, computerChoice));

