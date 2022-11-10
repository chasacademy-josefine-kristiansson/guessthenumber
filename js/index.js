// alla let
let inputForm, button, listNumbers, correct, toLow, toHigh, guessCount;
// alla document komsi hit
inputForm = document.getElementById("inputForm");
let userGuess = document.getElementById("inputForm");
let randomNumber = (document.getElementById("randomNumber").innerHTML =
  Math.floor(Math.random() * 100) + 1);
const btn = document.querySelector("button");
guessCount = 0;

function playAgain() {
  location.reload();
}

function setGuessInformation(information, shouldTextBeBig) {
  let guessInformationElement = document.getElementById("guessInformation");
  guessInformationElement.style.display = "block";
  guessInformationElement.innerHTML = information;
  if (shouldTextBeBig) {
    guessInformationElement.classList.add("bigText");
  }
}

function play() {
  guessCount = document.getElementById("guesses").innerHTML = guessCount + 1;
  document.getElementById("previousGuesses").innerHTML +=
    " " + inputForm.value + " ";
  if (inputForm.value == randomNumber) {
    document.getElementById("reset").style.display = "block";
    setGuessInformation(
      "You are correct! <br> The number was " + randomNumber + "!",
      true
    );
    document.getElementById("inputForm").style.display = "none";
    document.getElementById("myButton").style.display = "none";
    console.log("Woho");
  } else if (inputForm.value < randomNumber) {
    setGuessInformation("You are to low! Try a higher number!", false);
    document.getElementById("reset").style.display = "none";
    console.log("Buhu");
  } else if (inputForm.value > randomNumber) {
    setGuessInformation("You are to high! Try a lower number!", false);
    document.getElementById("reset").style.display = "none";
    console.log("Buhu");
  }
}
