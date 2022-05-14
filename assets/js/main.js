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
const alphabets = ['a', 'b', 'c', 'd'];
const questionElement = document.getElementById('question');
const options = document.querySelectorAll('label');
const submitBtn = document.getElementById('submit');//the getElementById gets element with the defined id.
const answers = document.querySelectorAll('input'); // the queryselectorall returns all selectors 
const container = document.querySelector('.container');//the query sellector sellects the first element that matches a CSS selector.

let currentQuiz = 0;
let score = 0;
let answer;
let answerHasBeenSelected = false;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionElement.textContent = currentQuizData.question;

    options.forEach(function(option, index)
    {
        let optionNumber = alphabets[index];
        option.innerText = currentQuizData[optionNumber];
    });
}// The function loads quiz for the user

function replay()
{
    location.reload();
}// This is a method that reloads the document, does the same as a reload button.

function validateResponse()
{
    for (answer of answers)
    {
        if(answer.checked)
        {
            let answerValue = answer.id;
            if(answerValue === quizData[currentQuiz].correct)
            {
                score++;
            }
            answerHasBeenSelected = true;
            break;
        }
        else
        {
            answerHasBeenSelected = false;
        }
    }
}

submitBtn.addEventListener('click', function()
{
    validateResponse();

    if(!answerHasBeenSelected)//Checks if an answer has been setected "!sign"
    {
        alert("Please choose an option!");
    }
    else //else will load the next quiz
    {
        currentQuiz++;
    
        if(currentQuiz < quizData.length)
        {
            loadQuiz(); //so if the currentQuiz is less than the quizData we defined on line 3 we call the loadQuiz(); function
        }
        else 
        {
            container.innerHTML = `<h1 id = "scoreText"> Your Score: ${score}/${quizData.length} </h1>
                                    <meter min = "0" max = "100" value = "${(score * 100)/quizData.length}"></meter>
                                    <button type = "button" id = "replay" onclick = "replay()">Replay</button>`;
        }
    }
});