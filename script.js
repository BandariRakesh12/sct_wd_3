const quizData = [
{
question:"What does HTML stand for?",
options:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyper Tool Multi Language",
"None"
],
answer:"Hyper Text Markup Language"
},

{
question:"Which language is used for styling webpages?",
options:[
"HTML",
"CSS",
"Python",
"Java"
],
answer:"CSS"
},

{
question:"Which language is used for web interactivity?",
options:[
"Java",
"Python",
"JavaScript",
"C++"
],
answer:"JavaScript"
},

{
question:"Which company developed JavaScript?",
options:[
"Microsoft",
"Netscape",
"Google",
"Apple"
],
answer:"Netscape"
},

{
question:"Which tag creates a hyperlink?",
options:[
"<link>",
"<a>",
"<href>",
"<url>"
],
answer:"<a>"
}
];

let currentQuestion = 0;
let score = 0;

const question =
document.getElementById("question");

const options =
document.getElementById("options");

const nextBtn =
document.getElementById("nextBtn");

function loadQuestion(){

let q = quizData[currentQuestion];

question.innerText = q.question;

options.innerHTML = "";

q.options.forEach(option=>{

let btn =
document.createElement("button");

btn.innerText = option;

btn.classList.add("option");

btn.onclick = () => {

if(option === q.answer){
score++;
}

nextQuestion();
};

options.appendChild(btn);

});
}

function nextQuestion(){

currentQuestion++;

if(currentQuestion < quizData.length){

loadQuestion();

}else{

question.innerHTML =
"Quiz Completed!";

options.innerHTML = "";

nextBtn.style.display="none";

document.getElementById("score")
.innerText =
"Your Score: " +
score + "/" + quizData.length;
}
}

loadQuestion();