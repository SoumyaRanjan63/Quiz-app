const container=document.querySelector('.container');
const questionBox =document.querySelector('.question');
const choicesBox=document.querySelector('.choices');
const nextBtn=document.querySelector('.nextBtn');
const scoreCard=document.querySelector('.scoreCard');


// Array of objects that store question ,choices and answer.
const quiz= [
    {
        "question": "Q. What is the result of the following expression: 2 + 2?",
        "choices": ["3", "4", "5", "6"],
        "answer": "4"
      },
      {
        "question": "Q. Which keyword is used to declare a variable in JavaScript?",
        "choices": ["var", "let", "const", "variable"],
        "answer": "var"
      },
      {
        "question": "Q. Which built-in method returns the length of a string?",
        "choices": ["length()", "size()", "count()", "getLength()"],
        "answer": "length()"
      },
      {
        "question": "Q. What is the correct way to write a comment in JavaScript?",
        "choices": ["// This is a comment", "<!-- This is a comment -->", "# This is a comment", "/* This is a comment */"],
        "answer": "// This is a comment"
      },
      {
        "question": "Q. Which operator is used for strict equality comparison in JavaScript?",
        "choices": ["==", "===", "!=", "!=="],
        "answer": "==="
      },
      {
        "question": "Q. What function is used to convert a string to an integer in JavaScript?",
        "choices": ["parseInt()", "stringToInt()", "toInteger()", "convertToInt()"],
        "answer": "parseInt()"
      },
      {
        "question": "Q. Which event is triggered when a user clicks on an HTML element?",
        "choices": ["onclick", "onchange", "onhover", "onsubmit"],
        "answer": "onclick"
      },
      {
        "question": "Q. What is the purpose of the 'return' statement in a JavaScript function?",
        "choices": ["To stop the execution of the function", "To display a message on the screen", "To return a value from the function", "To define a new variable"],
        "answer": "To return a value from the function"
      },
      {
        "question": "Q. Which function is used to add a new element to an array in JavaScript?",
        "choices": ["push()", "add()", "append()", "insert()"],
        "answer": "push()"
      },
      {
        "question": "Q. What is the result of the expression: '5' + 2?",
        "choices": ["52", "7", "NaN", "22"],
        "answer": "52"
      },
      {
        "question": "Q. Which loop is used for iterating over the properties of an object?",
        "choices": ["for loop", "while loop", "do-while loop", "for...in loop"],
        "answer": "for...in loop"
      },
      {
        "question": "Q. What is the purpose of the 'document.getElementById()' function in JavaScript?",
        "choices": ["To create a new HTML element", "To modify the style of an element", "To retrieve an element from the DOM", "To add a new attribute to an element"],
        "answer": "To retrieve an element from the DOM"
      },
      {
        "question": "Q. Which method is used to remove the last element from an array?",
        "choices": ["removeLast()", "pop()", "deleteLast()", "splice()"],
        "answer": "pop()"
      },
      {
        "question": "Q. What does the acronym 'JSON' stand for?",
        "choices": ["JavaScript Oriented Notation", "JavaScript Option Notation", "JavaScript Object Notation", "JavaScript Object Naming"],
        "answer": "JavaScript Object Notation"
      },
      {
        "question": "Q. What is the correct way to write an if statement in JavaScript?",
        "choices": ["if (condition) { // code }", "if { // code } condition;", "if [condition] then { // code }", "if condition: // code"],
        "answer": "if (condition) { // code }"
      },
      {
        "question": "Q. Which method is used to remove the first element from an array?",
        "choices": ["removeFirst()", "shift()", "deleteFirst()", "unshift()"],
        "answer": "shift()"
      },
      {
        "question": "Q. Which operator is used to concatenate strings in JavaScript?",
        "choices": ["+", "-", "*", "&"],
        "answer": "+"
      },
      {
        "question": "Q. What does the 'typeof' operator return when used with a number?",
        "choices": ["number", "numeric", "integer", "NaN"],
        "answer": "number"
      },
      {
        "question": "Q. What is the purpose of the 'this' keyword in JavaScript?",
        "choices": ["It refers to the current HTML element", "It refers to the parent element", "It refers to the previous element", "It refers to the current object"],
        "answer": "It refers to the current object"
      },
      {
        "question": "Q. Which method is used to convert a JavaScript object to a JSON string?",
        "choices": ["toJSON()", "stringify()", "convert()", "serialize()"],
        "answer": "JSON.stringify()"
      }
];

// Making variables.
let currentQuestionIndex=0;
let score=0;

// arrow function to show questions.
const showQeustions= ()=>{
   const questionDetails=quiz[currentQuestionIndex];
   questionBox.textContent=questionDetails.question;

    choicesBox.textContent="";
    for(let i=0;i<questionDetails.choices.length;i++){
    const currentChoice= questionDetails.choices[i];
    const choiceDiv=document.createElement('div');
    choiceDiv.textContent=currentChoice;
    choiceDiv.classList.add('choice');
    choicesBox.appendChild(choiceDiv);

    choiceDiv.addEventListener('click', ()=>{
        if(choiceDiv.classList.contains('selected')){
            choiceDiv.classList.remove('selected');
        }
        else{
            choiceDiv.classList.add('selected');
        }

    });
   }
}

// function of check answer for correct or wrong .
 const checkAnswer= () =>{
    const selectedChoice=document.querySelector('.choice.selected');
    if(selectedChoice.textContent === quiz[currentQuestionIndex].answer){
         score++;
    }
    else{
        alert('wrong answer');
    }
    currentQuestionIndex++;
    if(currentQuestionIndex < quiz.length){
        showQeustions();
    }
    else{
        showScore();
    }
 }

 //function for show scorecard.
 const showScore = () =>{
    questionBox.textContent="";
    choicesBox.textContent="";
    scoreCard.textContent=`Your Score : ${score}/${quiz.length}`;
    nextBtn.textContent="Play again";
    nextBtn.addEventListener('click', () =>{
      currentQuestionIndex=0;
      showQeustions();
      nextBtn.textContent="Next";
      scoreCard.textContent="";
    });
 }

showQeustions();
nextBtn.addEventListener('click', ()=>{
    const selectedChoice=document.querySelector('.choice.selected');
    if(!selectedChoice && nextBtn.textContent==='Next'){
        alert('select one answer!');
        return;
    }
    else{
        checkAnswer();
    }
   
})