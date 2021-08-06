// QUESTIONS

const questions = [
  {
    question: "You are almost never late for your appointments",
    answer1: "Agree",
    answer1Total: "1",
    answer2: "Neutral",
    answer2Total: "2",
    answer3: "Disagree",
    answer3Total: "3",
  },
  {
    question: "You enjoy having a wide circle of acquaintances",
    answer1: "Agree",
    answer1Total: "2",
    answer2: "Neutral",
    answer2Total: "1",
    answer3: "Disagree",
    answer3Total: "3",
  },
  {
    question: "You feel that the world is founded on compassion",
    answer1: "Agree",
    answer1Total: "1",
    answer2: "Neutral",
    answer2Total: "2",
    answer3: "Disagree",
    answer3Total: "3",
  },
  {
    question: "Strict observance of the established rules is likely to prevent attaining a desirable outcome",
    answer1: "Agree",
    answer1Total: "3",
    answer2: "Neutral",
    answer2Total: "2",
    answer3: "Disagree",
    answer3Total: "1",
  },
  {
    question: "When making a decision, you rely more on your feelings rather than an analysis of the situation",
    answer1: "Agree",
    answer1Total: "2",
    answer2: "Neutral",
    answer2Total: "3",
    answer3: "Disagree",
    answer3Total: "1",
  },
  {
    question: "You prefer to act immediately rather than speculate about various options",
    answer1: "Agree",
    answer1Total: "3",
    answer2: "Neutral",
    answer2Total: "2",
    answer3: "Disagree",
    answer3Total: "1",
  },
  {
    question: "You trust reason more than feelings",
    answer1: "Agree",
    answer1Total: "3",
    answer2: "Neutral",
    answer2Total: "2",
    answer3: "Disagree",
    answer3Total: "1",
  },
  {
    question: "You feel more comfortable sticking to conventional ways",
    answer1: "Agree",
    answer1Total: "3",
    answer2: "Neutral",
    answer2Total: "2",
    answer3: "Disagree",
    answer3Total: "1",
  },
  {
    question: "Your decisions are based more on the feeling of a moment rather than on thorough planning",
    answer1: "Agree",
    answer1Total: "2",
    answer2: "Neutral",
    answer2Total: "1",
    answer3: "Disagree",
    answer3Total: "3",
  },
  {
    question: "You maintain control over your desires and temptations",
    answer1: "Agree",
    answer1Total: "2",
    answer2: "Neutral",
    answer2Total: "1",
    answer3: "Disagree",
    answer3Total: "3",
  }
];

let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector(".quiz-container");
const questionEl = document.querySelector(".question");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
const restartButton = document.querySelector(".restart");
const result = document.querySelector(".result");

//Function to generate question
function generateQuestions(index) {
  //Select each question by passing it a particular index
  const question = questions[index];
  const option1Total = questions[index].answer1Total;
  const option2Total = questions[index].answer2Total;
  const option3Total = questions[index].answer3Total;
  //Populate html elements
  questionEl.innerHTML = `${index + 1}. ${question.question}`;
  option1.setAttribute("data-total", `${option1Total}`);
  option2.setAttribute("data-total", `${option2Total}`);
  option3.setAttribute("data-total", `${option3Total}`);
  option1.innerHTML = `${question.answer1}`;
  option2.innerHTML = `${question.answer2}`;
  option3.innerHTML = `${question.answer3}`;
}

function loadNextQuestion() {
  const selectedOption = document.querySelector('input[type="radio"]:checked');
  //Check if there is a radio input checked
  if (!selectedOption) {
    alert("Please select your answer!");
    return;
  }
  //Get value of selected radio
  const answerScore = Number(
    selectedOption.nextElementSibling.getAttribute("data-total")
  );

  ////Add the answer score to the score array
  score.push(answerScore);

  selectedAnswersData.push();

  const totalScore = score.reduce((total, currentNum) => total + currentNum);

  //Finally we incement the current question number ( to be used as the index for each array)
  currentQuestion++;

  //once finished clear checked
  selectedOption.checked = false;
  //If quiz is on the final question
  if (currentQuestion == totalQuestions - 1) {
    nextButton.textContent = "Finish";
  }
  //If the quiz is finished then we hide the questions container and show the results
  if (currentQuestion == totalQuestions) {
    container.style.display = "none";
    result.innerHTML = `<h1 class="final-score">Your score: ${totalScore}</h1>
           <div class="summary">
              <h1>Summary</h1>
              <p>Possible - Hogwart's Houses, see below for a summary based on your results:</p>
              <p><img src="Slytherin.png" width="200px" height="200px"> 25 - 30- Slytherin House values ambition, leadership, self-preservation, cunning and resourcefulness and was founded by Salazar Slytherin. Its emblematic animal is the serpent, and its colours are emerald green and silver. Professor Horace Slughorn was the Head of Slytherin during the 1997–1998 school year, replacing Severus Snape, who as well, replaced Slughorn as Potions Professor when he retired for the first time several years prior. Slytherin had produced the most Death Eaters and Dark Wizards, including Tom Riddle, Bellatrix Lestrange and Lucius Malfoy, for example. But that does not mean that other Houses haven’t produced any; Peter Pettigrew was a Gryffindor, and Quirinus Quirrell was a Ravenclaw. The Bloody Baron is the House Ghost. The founder of the House was Salazar Slytherin. Slytherin corresponds roughly to the element of water. The Slytherin dormitories and common room are reached through a bare stone wall in the Dungeons. The Slytherin common room lies beneath the Black Lake. It is a long, low underground room with rough stone walls and silver lamps hanging from the ceiling. Famous Slytherins include Merlin, Tom Riddle, Draco Malfoy, and Dolores Umbridge.</p>
              <p><img src="Gryffindor.png" width="200px" height="200px"> 20 - 25- Gryffindor values bravery, daring, nerve, and chivalry. Its emblematic animal is the lion, and its colours are scarlet and gold. Minerva McGonagall was the most recent Head of Gryffindor. Sir Nicholas de Mimsy-Porpington, also known as "Nearly Headless Nick", was the House Ghost. The founder of the House was Godric Gryffindor. Gryffindor corresponds to the element of Fire. The common room was located in one of the highest towers at Hogwarts, the entrance was situated on the seventh floor in the east wing of the castle and is guarded by a portrait of The Fat Lady. She permits entrance if given the correct password, which is changed numerous times throughout the school year. Famous Gryffindors include Albus Dumbledore, Harry Potter, and Minerva McGonagall.</p>
              <p><img src="Ravenclaw.png" width="200px" height="200px"> 15 - 20- Ravenclaw values intelligence, knowledge, curiosity, creativity and wit. Its emblematic animal is the eagle, and its colours are blue and bronze. The Ravenclaw Head of House in the 1990s was Filius Flitwick. The ghost of Ravenclaw is the Grey Lady, who was the daughter of Rowena Ravenclaw, the House's founder. Ravenclaw corresponds to the element of air. The Ravenclaw common room and dormitories are located in a tower on the west side of the castle. Ravenclaw students must answer a riddle as opposed to giving a password to enter their dormitories. This riddle, however, can be answered by non-Ravenclaws. Famous Ravenclaws include Luna Lovegood, Gilderoy Lockhart, Ignatia Wildsmith (inventor of Floo powder), and Garrick Ollivander.</p>
              <p><img src="Hufflepuff.png" width="200px" height="200px"> 10 -15- Hufflepuff values hard work, dedication, patience, loyalty, and fair play. Its emblematic animal is the badger, and yellow and black are its colours. Pomona Sprout was the Head of Hufflepuff during 1991-1998, Sprout left the post of Head of Hufflepuff and Herbology Professor sometime before 2017 and her successor for the position of Head of Hufflepuff is currently unknown. The Fat Friar is its ghost. The founder of the House was Helga Hufflepuff. Hufflepuff corresponds to the element of earth. The Hufflepuff dormitories and common room are located somewhere in the basement, near the castle's kitchens. It can be accessed by tapping the barrel two from the bottom, middle of the second row in the rhythm of "Helga Hufflepuff" and is described as being a cosy and welcoming place with yellow hangings, fat armchairs, and underground tunnels that lead to the dormitories, which have perfectly round doors, similar to barrel tops. Famous Hufflepuffs include Hengist of Woodcroft (founder of Hogsmeade), Newt Scamander (author of Fantastic Beasts and Where to Find Them), and Artemisia Lufkin (first female minister for magic).</p>
          </div>
          <button class="restart">Restart Quiz</button>
           `;
    return;
  }
  generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
  //Decrement quentions index
  currentQuestion--;
  //remove last array value;
  score.pop();
  //Generate the question
  generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
  if (e.target.matches("button")) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
  }
}

generateQuestions(currentQuestion);
nextButton.addEventListener("click", loadNextQuestion);
previousButton.addEventListener("click", loadPreviousQuestion);
result.addEventListener("click", restartQuiz);
