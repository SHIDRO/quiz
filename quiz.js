const quizData = [
    {
        question: ' How Old Is Adam ?',
        a: 10,
        b: 22,
        c: 14,
        d:100,
        correct:'c'
    }, {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'python',
        c: 'C',
        d:'JavaScript',
        correct:'d'
    }, {
        question: 'who is the president of US ?',
        a: 'Florin POP',
        b: 'Donald Trump',
        c: 'Joe Biden',
        d:'Miahi Andrei',
        correct:'c'
    }, {
        
            question: 'what does HTML Stand for ?',
            a: 'Hypertext Markup Language' ,
            b: 'Coscading Style Sheet',
            c: 'JSON Object Notation',
            d:'Application Programming InterFace',
            correct:'a'
    }, {
        question: 'What year was js launched ?',
            a: '2020' ,
            b: '2019',
            c: '2018',
            d:'None of the above',
            correct:'d'
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

//understood
function loadQuiz(){
    deselectAnswers();
    let currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
//understood
function getSelected(){

    let answer = undefined;
    
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
} 

//understood
function deselectAnswers(){

    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    });
}
//understood
submitBtn.addEventListener('click', () =>{
    const answer = getSelected();
    console.log(answer);   

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
       } else {
           quiz.innerHTML = `<h2>
           You Have Answer Correctly At  ${score}/ ${quizData.length} quesrtions.
           </2><button onclick = "location.reload()">Reload</button>`
       }
    }
})