var questions = [{
    "question": "Which is the slowest animal in the world ?",
    "option1": "chicken",
    "option2": "snail",
    "option3": "Hare",
    "option4":"Donkey",
    "answer":"2"
},{
    "question": "One of the following is not a string instrument",
    "option1": "flute",
    "option2": "piano",
    "option3": "Guitar",
    "option4": "Drum",
    "answer": "1"
},{
    "question": "Nigeria has .....?",
    "option1" : "Forty-eight states",
    "option2": "Thirty-six states",
    "option3": "Thirty states",
    "option4": "Twenty-four states",
    "answer" : "2"
},{
    "question": "solve 2 * 3 + 4 / 2 - 5",
    "option1": "0",
    "option2": "3",
    "option3": "5",
    "option4": "6",
    "answer" : "2"
},{
    "question": "Svelte is a ..... ",
    "option1": "php framework",
    "option2": "java framework",
    "option3": "javascript framework",
    "option4": "C# framework",
    "answer" : "3"
}]

var currentQuestion = 0
var score = 0
var totQuestions = questions.length

var container = document.getElementById("quizContainer")
var questionEl = document.getElementById("question")
var noQuestion = document.getElementById("numQuestion")
var opt1 = document.getElementById("opt1")
var opt2 = document.getElementById("opt2")
var opt3 = document.getElementById("opt3")
var opt4 = document.getElementById("opt4")
var correctAns = document.getElementsByClassName("option") 
var recordCard = document.getElementById("recordCard")
var nextButton = document.getElementById("nextButton")
var resultCont = document.getElementById("result")

function loadQuestion(questionIndex) { 
    noQuestion.innerHTML = "Question " +(currentQuestion + 1) +" of "+questions.length;
    var q = questions[questionIndex]
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1
    opt2.textContent = q.option2
    opt3.textContent = q.option3
    opt4.textContent = q.option4
    recordCard.innerHTML = (this.score)/10 + "/" + this.questions.length;
}

function loadNextQuestion() {
    var selectedOption = document.querySelector('input[type=radio]:checked')
    if (!selectedOption) {
        alert('please select your answer!')
        return;
    }
    let answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {
        score += 10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion == totQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    if (currentQuestion == totQuestions) {
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        return;
    }
    loadQuestion(currentQuestion)
}
loadQuestion(currentQuestion);
