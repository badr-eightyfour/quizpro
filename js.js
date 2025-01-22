const questions = [
    {
        question: "What keyword is used to define a function in JavaScript?",
        options: ["function", "def", "func", "define"],
        answer: 0
    },
    {
        question: "Which of the following is used for a single-line comment in JavaScript?",
        options: ["//", "#", "/*", "--"],
        answer: 0
    },
    {
        question: "Which of the following is an immutable data type in JavaScript?",
        options: ["Array", "Object", "String", "Set"],
        answer: 2
    },
    {
        question: "Which operator is used to check equality in JavaScript?",
        options: ["=", "==", "===", "!="],
        answer: 2
    },
    {
        question: "Which method is used to parse a JSON string in JavaScript?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.decode()", "JSON.toString()"],
        answer: 0
    },
    {
        question: "What is the result of '5' + 2 in JavaScript?",
        options: ["7", "52", "Error", "NaN"],
        answer: 1
    },
    {
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: 0
    },
    {
        question: "Which statement is used to exit a loop in JavaScript?",
        options: ["break", "exit", "continue", "return"],
        answer: 0
    },
    {
        question: "Which of the following is a valid way to declare a variable in JavaScript?",
        options: ["let", "var", "const", "All of the above"],
        answer: 3
    },
    {
        question: "What does the 'typeof' operator do in JavaScript?",
        options: ["Checks the type of an expression", "Converts a string to a type", "Declares a variable", "Throws an error"],
        answer: 0
    },
    {
        question: "Which of the following is used to declare a constant in JavaScript?",
        options: ["let", "var", "const", "constant"],
        answer: 2
    },
    {
        question: "What will be the output of `console.log(2 + '2')` in JavaScript?",
        options: ["4", "22", "NaN", "Error"],
        answer: 1
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        options: ["pop()", "shift()", "slice()", "remove()"],
        answer: 0
    },
    {
        question: "How can you define an arrow function in JavaScript?",
        options: ["function() => {}", "function => {}", "() => {}", "=> function() {}"],
        answer: 2
    },
    {
        question: "What will be the output of `console.log(3 > 2 > 1)` in JavaScript?",
        options: ["true", "false", "NaN", "Error"],
        answer: 1
    },
    {
        question: "Which method is used to find the index of an element in an array?",
        options: ["indexOf()", "findIndex()", "getIndex()", "find()"],
        answer: 0
    },
    {
        question: "What is the result of `null == undefined` in JavaScript?",
        options: ["true", "false", "Error", "NaN"],
        answer: 0
    },
    {
        question: "Which of the following is a correct way to create an object in JavaScript?",
        options: ["{}", "[]", "()", "<>"],
        answer: 0
    },
    {
        question: "What is the purpose of the `setTimeout()` function in JavaScript?",
        options: ["Executes a function immediately", "Executes a function after a specified time", "Pauses the program", "Creates a loop"],
        answer: 1
    },
    {
        question: "Which of the following methods can be used to join two strings in JavaScript?",
        options: ["join()", "concat()", "append()", "merge()"],
        answer: 1
    },
    {
        question: "Which of the following loops is best used to iterate over arrays in JavaScript?",
        options: ["for", "while", "do...while", "for...of"],
        answer: 3
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".option-btn");
const resultContainer = document.getElementById("resultContainer");
const resultText = document.getElementById("result");
function loadNextQuestion() {
    loadRandomQuestion(); // Randomize the next question
    currentQuestion++; // Increase the current question index
    if (currentQuestion >= questions.length) {
        currentQuestion = 0; // Reset to 0 if we've gone through all questions
    }
}

loadRandomQuestion();
