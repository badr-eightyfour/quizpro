const questions = [
    {
        question: "What keyword is used to define a function in Python?",
        options: ["function", "def", "func", "define"],
        answer: 1
    },
    {
        question: "Which of the following is used for a single-line comment in Python?",
        options: ["//", "#", "/*", "--"],
        answer: 1
    },
    {
        question: "Which of the following data types is immutable in Python?",
        options: ["list", "dictionary", "tuple", "set"],
        answer: 2
    },
    {
        question: "What is the correct way to create a set in Python?",
        options: ["[]", "{}", "()", "<>"],
        answer: 1
    },
    {
        question: "Which operator is used for exponentiation in Python?",
        options: ["^", "**", "*", "//"],
        answer: 1
    },
    {
        question: "What function is used to get the length of a list in Python?",
        options: ["length()", "size()", "len()", "count()"],
        answer: 2
    },
    {
        question: "Which of the following is used to check if a value exists in a list?",
        options: ["in", "contains", "exists", "has"],
        answer: 0
    },
    {
        question: "How do you define a variable in Python?",
        options: ["variable = value", "value => variable", "def variable(value)", "variable == value"],
        answer: 0
    },
    {
        question: "What does the 'continue' statement do in Python?",
        options: ["Stops the loop", "Skips the rest of the loop and goes to the next iteration", "Exits the loop", "Throws an exception"],
        answer: 1
    },
    {
        question: "Which of the following is used to handle exceptions in Python?",
        options: ["try...except", "catch...finally", "throw...catch", "error...handle"],
        answer: 0
    },
    {
        question: "What is the result of 7 // 3 in Python?",
        options: ["2.33", "2", "3", "1"],
        answer: 1
    },
    {
        question: "Which of the following is the correct syntax for importing a module in Python?",
        options: ["import module_name", "include module_name", "using module_name", "require module_name"],
        answer: 0
    },
    {
        question: "What is the correct way to create a dictionary in Python?",
        options: ["[]", "{}", "()", "<>"],
        answer: 1
    },
    {
        question: "What does the 'pass' statement do in Python?",
        options: ["Terminates the loop", "Does nothing and allows the program to continue", "Raises an error", "Exits the function"],
        answer: 1
    },
    {
        question: "Which method is used to remove an item from a list by index?",
        options: ["remove()", "pop()", "del()", "clear()"],
        answer: 1
    },
    {
        question: "How can you convert a string to an integer in Python?",
        options: ["int()", "str()", "float()", "bool()"],
        answer: 0
    },
    {
        question: "Which function can be used to read user input in Python?",
        options: ["input()", "read()", "get()", "scan()"],
        answer: 0
    },
    {
        question: "Which method is used to sort a list in Python?",
        options: ["sort()", "order()", "arrange()", "list.sort()"],
        answer: 0
    },
    {
        question: "What is the result of 5 == '5' in Python?",
        options: ["True", "False", "Error", "None"],
        answer: 1
    },
    {
        question: "What does the 'else' statement do in Python?",
        options: ["Runs if a condition is true", "Runs if a condition is false", "Is used for error handling", "Exits the loop"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".option-btn");
const resultContainer = document.getElementById("resultContainer");
const resultText = document.getElementById("result");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    options.forEach((option, index) => {
        option.textContent = q.options[index];
    });
    resultContainer.style.display = "none";
}

function checkAnswer(optionIndex) {
    if (optionIndex === questions[currentQuestion].answer) {
        score++;
        resultText.textContent = "Correct!";
    } else {
        resultText.textContent = `Incorrect! The correct answer is: ${questions[currentQuestion].options[questions[currentQuestion].answer]}`;
    }

    scoreElement.textContent = `Score: ${score}`;
    resultContainer.style.display = "block";
}

function loadNextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        resultText.textContent = `Quiz Over! Final Score: ${score}`;
        resultContainer.style.display = "block";
        scoreElement.style.display = "none"; // Hide score while quiz is finished
    }
}

loadQuestion();
