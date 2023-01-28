const question = document.querySelector('.question');
const nextButton = document.querySelector('.next');
const choice1 = document.querySelector('.choice1');
const choice2 = document.querySelector('.choice2');
const choice3 = document.querySelector('.choice3');
const choice4 = document.querySelector('.choice4');
const buttons = document.querySelector('.buttonContainer');
const hearts = document.querySelector(".hearts");
const next = document.querySelector('.next');

let score = 5;
let qNum = 0;
let nextFlag = false;

choice1.addEventListener('click', function() {
   if (!nextFlag) questionsCorrect(1);
});
choice2.onclick = function() {
   if (!nextFlag) questionsCorrect(2);
}
choice3.onclick = function() {
   if (!nextFlag) questionsCorrect(3);
}
choice4.onclick = function() {
   if (!nextFlag) questionsCorrect(4);
}

nextButton.onclick = function() {
   alert('you must select a choice before continuing.');
}

function questionsCorrect(userChoice) {
   let answers = [1, 2, 3, 4, 4];
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
         console.log(heartsArr);
      }
}

function nextQuestion(noChoiceFlag) {
   qNum++;
   nextButton.textContent = 'NEXT';
   nextFlag = true;
   console.log(qNum);
   console.log(score);
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
      'question 2 content',
      'question 3 content',
      'question 4 content',
      'question 5 content',
   ]
   question.textContent = String(questionArr[qNum]);
}

function choices() {
   let choices1 = [
      'question 1 query',
      'question 2 query',
      'question 3 query',
      'question 4 query',
      'question 5 query',
   ];
   let choices2 = [
      'question 1 query',
      'question 2 query',
      'question 3 query',
      'question 4 query',
      'question 5 query',
   ];
   let choices3 = [
      'question 1 query',
      'question 2 query',
      'question 3 query',
      'question 4 query',
      'question 5 query',
   ];
   let choices4 = [
      'question 1 query',
      'question 2 query',
      'question 3 query',
      'question 4 query',
      'question 5 query',
   ];
   choice1.textContent = choices1[qNum];
   choice2.textContent = choices2[qNum];
   choice3.textContent = choices3[qNum];
   choice4.textContent = choices4[qNum];
}


function showResult() {
   question.textContent = `Your score = ${score}`;
   buttons.style.display = 'none';
   next.style.display = 'none';
   animateHearts();
}

function animateHearts() {
   
   hearts.style.cssText += `animation: blinker 0.8s linear 7;`

 };

