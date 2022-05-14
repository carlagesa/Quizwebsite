'use strict';

const quizData = 
[
    {
        question: "Which of the following is a JavaScript framework",
        a: "MariaDB",
        b: "React",
        c: "Perl",
        d: "Django",
        correct: 'b'
    },
    {
        question: "Which of the following is not a language used in front-end development",
        a: "PHP",
        b: "HTML",
        c: "CSS",
        d: "Javascript",
        correct: 'a'
    },
    {
        question: "What is the most trending programming language?",
        a: "Java",
        b: "TypeScript",
        c: "Python",
        d: "PHP",
        correct: 'c'
    },
    {
        question: "When was ES6 released?",
        a: "2015",
        b: "2021",
        c: "2014",
        d: "None of the above",
        correct: 'a'
    },
    {
        question: "Full form of CSS",
        a: "Casscading Some Sheets",
        b: "Colloring Styling Sheets",
        c: "Casscading Style Sheets",
        d: "None of the above",
        correct: 'c'
    },
    {
        question: "Full form of HTML",
        a: "HyperText Made Language",
        b: "HyperText Markup Language",
        c: "HyperCasual Terrific Language",
        d: "None of these",
        correct: 'b'
    },
    {
        question: "What is NOT a JavaScript data types?",
        a: "Strings",
        b: "Floats",
        c: "Integers",
        d: "Decimals",
        correct: "d"
    }
];
const alphabets = ["a", "b", "c", "d"];
const questionElements = document.getElementById('questions');
const options = document.querySelectorAll('label');
const submitBtn = document.getElementById('input');//the getElementById gets element with the defined id.
const answers = document.querySelectorAll('input'); // the queryselectorall returns all selectors 
const container = document.querySelector('.container');//the query sellector sellects the first element that matches a CSS selector.

let currentQuiz = 0;
let score = 0;
let answer;
letanswerHasBeenSelected = false;
