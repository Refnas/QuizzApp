const quizData = [
    {
      question : "What is the capital of France?",
      a : "London",
      b : "Berlin",
      c : "Madrid",
      d : "Paris",
      answer : "d"
    },
    {
      question: "Which planet is known as the Red Planet?",
      a : "Mars",
      b : "Venus",
      c : "Jupiter",
      d : "Mercury",
      answer: "a"
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      a : "Charles Dickens",
      b : "William Shakespeare",
      c : "Jane Austen",
      d : " Leo Tolstoy",
      answer: "b"
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      a : "Oxygen",
      b : "Carbon Dioxide",
      c : "Nitrogen",
      d : "Hydrogen",
      answer: "b"
    },
    {
      question: "What is the largest mammal in the world?",
      a : "African Elephant",
      b : "Giraffe",
      c : "Blue Whale",
      d : "Hippopotamus",
      answer: "c"
    },
    {
      question: "Which country is famous for the ancient pyramids?",
      a : "Greece",
      b : "Egypt",
      c : "China",
      d : "India",
      answer: "b"
    },
    {
      question: "What is the chemical symbol for gold?",
      a : "Go",
      b : "Au",
      c : "Gd",
      d : "Gl",
      answer: "b"
    },
    {
      question: "Which gas is most abundant in the Earth's atmosphere?",
      a : "Oxygen",
      b : "Carbon Dioxide",
      c : "Nitrogen",
      d : "Argon",
      answer: "c"
    },
    {
      question: "What is the largest planet in our solar system?",
      a: "Venus",
      b: "Earth",
      c: "Jupiter",
      d: "Saturn",
      answer: "c"
    },
    {
      question: "Which gas is known as laughing gas?",
      a: "Oxygen",
      b: "Carbon Dioxide",
      c: "Nitrous Oxide",
      d: "Methane",
      answer: "c"
    },
    {
      question: "What is the largest ocean in the world?",
      a: "Atlantic Ocean",
      b: "Indian Ocean",
      c: "Arctic Ocean",
      d: "Pacific Ocean",
      answer: "d"
    },
    {
      question: "Who is often credited with inventing the World Wide Web?",
      a: "Steve Jobs",
      b: "Tim Berners-Lee",
      c: "Bill Gates",
      d: "Mark Zuckerberg",
      answer: "b"
    },
    {
      question: "Which gas is responsible for the green color of plants?",
      a: "Oxygen",
      b: "Carbon Dioxide",
      c: "Chlorophyll",
      d: "Nitrogen",
      answer: "c"
    },
    {
      question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
      a: "Mars",
      b: "Venus",
      c: "Jupiter",
      d: "Saturn",
      answer: "b"
    },
    {
      question: "What is the chemical symbol for water?",
      a: "Wt",
      b: "Wa",
      c: "H2O",
      d: "H2",
      answer: "c"
    },
    {
      question: "What is the currency of Japan?",
      a: "Yuan",
      b: "Dollar",
      c: "Euro",
      d: "Yen",
      answer: "d"
    },
    {
      question: "Who was the first woman to fly solo across the Atlantic Ocean?",
      a: "Amelia Earhart",
      b: "Bessie Coleman",
      c: "Harriet Quimby",
      d: "Jacqueline Cochran",
      answer: "a"
    },
    {
      question: "Track and field star Carl Lewis won how many gold medals at the 1984 Olympic games?",
      a: "2",
      b: "9",
      c: "4",
      d: "10",
      answer: "c"
    },
    {
      question: "What is the largest desert in the world?",
      a: "Sahara Desert",
      b: "Gobi Desert",
      c: "Arabian Desert",
      d: "Antarctica",
      answer: "a"
    },
    {
      question: "Who painted the Mona Lisa?",
      a: "Vincent van Gogh",
      b: "Pablo Picasso",
      c: "Leonardo da Vinci",
      d: "Michelangelo",
      answer: "c"
    }
  ];

const quizResult = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const noQuestion = document.getElementById('noQuestion');
const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');

  let currentQuiz = 0;
  let score = 0;

  loadQuiz();

  function loadQuiz(){
    deSelecteAnswers();
    const currentQuData = quizData[currentQuiz];
    questionEl.innerText = currentQuData.question;

    a_text.innerText = currentQuData.a;
    b_text.innerText = currentQuData.b;
    c_text.innerText = currentQuData.c;
    d_text.innerText = currentQuData.d;

    noQuestion.innerHTML = `<b>${currentQuiz + 1} / ${quizData.length}</b>`

  }

  function getSelected(){

    let answer = undefined;

    answerEls.forEach(answerEl =>{
      if(answerEl.checked){
        answer = answerEl.id;
      }
    });

    return answer;
  }

  function deSelecteAnswers(){

      answerEls.forEach(answerEl =>{
        answerEl.checked = false;
    });

  }
  
submitBtn.addEventListener('click',() =>{

  const answer = getSelected();

  if(answer){
    if(answer === quizData[currentQuiz].answer){
      score++;
    }

    currentQuiz ++;

    if(currentQuiz < quizData.length){
      loadQuiz();
    }
    else{
      quizResult.style.textAlign = "center";
      quizResult.innerHTML = `<h1>SCORE : ${score} / ${quizData.length}</h1>`
    }
  }
});

