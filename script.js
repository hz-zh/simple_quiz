const question = document.querySelector('.question');
const nextButton = document.querySelector('.next');
const choice1 = document.querySelector('.choice1');
const choice2 = document.querySelector('.choice2');
const choice3 = document.querySelector('.choice3');
const choice4 = document.querySelector('.choice4');
const buttons = document.querySelector('.buttonContainer');
const hearts = document.querySelector(".hearts");
const correctAnswers = document.querySelector('.correctAnswers');

let score = 5;
let qNum = 0;
let nextFlag = false;
let clickedColor = 'rgba(6, 98, 98, 0.651)';
let unClickedColor = 'rgba(8, 175, 175, 0.651)';
let choiceArr = [choice1, choice2, choice3, choice4];

choice1.addEventListener('click', function() {
   if (!nextFlag) questionsCorrect(1);
   changeButtonColor(0);
});
choice2.onclick = function() {
   if (!nextFlag) questionsCorrect(2);
   changeButtonColor(1);
}
choice3.onclick = function() {
   if (!nextFlag) questionsCorrect(3);
   changeButtonColor(2);
}
choice4.onclick = function() {
   if (!nextFlag) questionsCorrect(4);
   changeButtonColor(3);
}

nextButton.onclick = function() {
   alert('you must select a choice before continuing.');
}

function changeButtonColor(num) {
   if (nextFlag && num != 4) return;
   if(num == 4) {
   choiceArr[0].style.backgroundColor = unClickedColor;
   choiceArr[1].style.backgroundColor = unClickedColor;
   choiceArr[2].style.backgroundColor = unClickedColor;
   choiceArr[3].style.backgroundColor = unClickedColor;
   return;
   }
   else {
   choiceArr[0].style.backgroundColor = unClickedColor;
   choiceArr[1].style.backgroundColor = unClickedColor;
   choiceArr[2].style.backgroundColor = unClickedColor;
   choiceArr[3].style.backgroundColor = unClickedColor;
   choiceArr[num].style.backgroundColor = clickedColor;
   }
}

function questionsCorrect(userChoice) {
   let answers = [3, 2, 1, 4, 3];
   checkChoice(userChoice, answers[qNum]);
}

function checkChoice(userChoice, answer) {
   nextButton.onclick = function() {
      if (userChoice != answer) {
         removeHeart();
         score--;
         if (qNum > 3) {
            nextButton.textContent = 'Finish';
            nextButton.onclick = function() { showResult() }
         }
         else nextQuestion(1);
         }
      else if ( userChoice == answer) {
         if (qNum > 3) {
            nextButton.textContent = 'Finish';
            nextButton.onclick = function() { showResult() }
            }
         else nextQuestion(1);
         }
      }
}

function nextQuestion(noChoiceFlag) {
   qNum++;
   nextButton.textContent = 'NEXT';
   nextFlag = true;
   changeButtonColor(4);

   nextButton.onclick = function() {
      if (noChoiceFlag == 1) {
         questions();
         choices();
         nextButton.textContent = 'SUBMIT';
         nextFlag = false;
      }
      else { alert('you must select a choice before continuing.');
      nextFlag = false;
      return; }
   }
}

function removeHeart() {
   hearts.removeChild(hearts.lastElementChild);
}

function questions() {
   let questionArr = [
      'question 1 content', 
      'Why was Pong created?',
      'Name one advantage of the relational database.',
      'What was the name of the System/4 Pi predecessor?',
      `BONUS QUESTION: \nWhat programming language was in the background on slide 8? 
      (The programming languages slide)`
   ]
   question.textContent = String(questionArr[qNum]);
}

function choices() {
   let choices1 = [
      'question 1 query',
      'To compete with other popular video games such as “The Oregon Trail”',
      'Less data duplication',
      'System 1',
      'C',
   ];
   let choices2 = [
      'question 1 query',
      'It was a result of a training exercise assigned to a programmer working for Atari',
      'Easier to do calculations on data',
      'AP-101',
      'Java',
   ];
   let choices3 = [
      'question 1 query',
      'To simulate the physics of real table tennis',
      'Takes up less storage',
      'IBM Micro',
      'HTML',
   ];
   let choices4 = [
      'question 1 query',
      'For fun',
      'More secure than previous models',
      'System/360',
      'Python',
   ];
   choice1.textContent = choices1[qNum];
   choice2.textContent = choices2[qNum];
   choice3.textContent = choices3[qNum];
   choice4.textContent = choices4[qNum];
}


function showResult() {
   question.textContent = `Your score = ${score}`;
   buttons.style.display = 'none';
   nextButton.style.display = 'none';
   correctAnswers.style.display = 'flex';
   animateHearts();
}

function animateHearts() {
   
   hearts.style.cssText += `animation: blinker 0.8s linear 7;`

 };

