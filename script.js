const main = document.querySelector(".main");
// const sentanceNumber = Math.floor(Math.random() * 1000) + 1000;
const sentanceNumber = 1000000;
const message = "Będę miły i nie będę głupio żartował";
const time = 50;

let currentSentance = 1;
let currentLetter = 0;

const addLetter = () => {
  const finalSentance = `${currentSentance}. ${message}`;
  currentLetter++;
  const paragraph = document.querySelector(".main p:last-of-type");
  paragraph.textContent = finalSentance.slice(0, currentLetter);
  if (currentLetter < finalSentance.length) setTimeout(addLetter, time);
  else {
    currentSentance++;
    currentLetter = 0;
    if (currentSentance <= sentanceNumber) {
      main.appendChild(document.createElement("p"));
      setTimeout(addLetter, time);
    }
  }
};

// document.querySelector(".number").textContent = sentanceNumber;
setTimeout(addLetter, time);
