const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlink Text Markup Language", "None of the above"],
        answer: 0
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<a>", "<link>", "<href>", "<hyperlink>"],
        answer: 0
    },
    {
        question: "Which of the following is NOT a valid HTML tag?",
        options: ["<head>", "<footer>", "<section>", "<body>"],
        answer: 3
    },
    {
        question: "What attribute is used to specify the destination of a link in HTML?",
        options: ["src", "href", "link", "target"],
        answer: 1
    },
    {
        question: "How do you link a CSS file to an HTML document?",
        options: ['<link href="style.css">', '<link rel="stylesheet" href="style.css">', '<style src="style.css">', '<css src="style.css">'],
        answer: 1
    },
    {
        question: "Which of the following CSS properties is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "background"],
        answer: 2
    },
    {
        question: "How do you add a comment in CSS?",
        options: ["/* Comment */", "// Comment", "<!-- Comment -->", "# Comment"],
        answer: 0
    },
    {
        question: "Which property is used to change the font of an element in CSS?",
        options: ["font-style", "font-weight", "font-size", "font-family"],
        answer: 3
    },
    {
        question: "What is the correct HTML tag for inserting a line break?",
        options: ["<break>", "<lb>", "<br>", "<hr>"],
        answer: 2
    },
    {
        question: "Which property is used to set the space between words in CSS?",
        options: ["word-spacing", "letter-spacing", "line-spacing", "text-spacing"],
        answer: 0
    },
    {
        question: "Which of the following is NOT a valid CSS selector?",
        options: [".class", "#id", "element", "<class>"],
        answer: 3
    },
    {
        question: "How can you make a list horizontal in CSS?",
        options: ["list-style: inline;", "list-style-type: none;", "display: inline;", "display: flex;"],
        answer: 0
    },
    {
        question: "How do you select an element with an id of 'header' in CSS?",
        options: ["#header", ".header", "header", "id='header'"],
        answer: 0
    },
    {
        question: "What is the default value of the 'position' property in CSS?",
        options: ["absolute", "relative", "static", "fixed"],
        answer: 2
    },
    {
        question: "Which CSS property is used to change the text color?",
        options: ["text-color", "font-color", "color", "text-style"],
        answer: 2
    },
    {
        question: "How do you create a flexbox layout in CSS?",
        options: ["display: block;", "display: inline;", "display: flex;", "display: grid;"],
        answer: 2
    },
    {
        question: "Which of the following is a valid HTML5 doctype?",
        options: ["<!DOCTYPE html>", "<!DOCTYPE html5>", "<DOCTYPE html>", "<html>"],
        answer: 0
    },
    {
        question: "How do you make text bold in HTML?",
        options: ["<b>", "<strong>", "<bold>", "<text>"],
        answer: 1
    },
    {
        question: "Which of the following is used to link an external JavaScript file in an HTML document?",
        options: ["<js src='file.js'>", "<script src='file.js'>", "<javascript src='file.js'>", "<link src='file.js'>"],
        answer: 1
    },
    {
        question: "Which CSS property is used to control the layout of elements?",
        options: ["layout", "display", "visibility", "position"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".option-btn");
const resultContainer = document.getElementById("resultContainer");
const resultText = document.getElementById("result");

function loadRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const q = questions[randomIndex];
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
    resultContainer.style.display = "block";
}

function loadNextQuestion() {
    loadRandomQuestion();
}

loadRandomQuestion();
