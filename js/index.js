// alla let
let inputForm, button, listNumbers, correct, toLow, toHigh, guessCount;
// alla document komsi hit
inputForm = document.getElementById("inputForm");
let randomNumber = (document.getElementById("randomNumber").innerHTML =
  Math.floor(Math.random() * 10) + 1);
const btn = document.querySelector("button");
guessCount = 0;
guessCount = document.getElementById("guessCount").innerHTML =
  "Guesses so far " + guessCount + "!";

/* btn.addEventListener("click", play); */

// function som ser ifall random nummert och input är equal

function play() {
  inputForm.value;
  guessCount += 1;
  if (inputForm.value == randomNumber) {
    document.getElementById("correct").innerHTML =
      "You are correct! <br> The number was " + randomNumber + "!";
    document.getElementById("toLow").style.display = "none";
    document.getElementById("toHigh").style.display = "none";
    console.log("Woho");
  } else if (inputForm.value < randomNumber) {
    document.getElementById("toLow").innerHTML =
      "You are to low! Try a higher number!";
    document.getElementById("toHigh").style.display = "none";
    document.getElementById("toLow").style.display = "block";
    console.log("Buhu");
  } else if (inputForm.value > randomNumber) {
    document.getElementById("toHigh").innerHTML =
      "You are to high! Try a lower number!";
    document.getElementById("toLow").style.display = "none";
    document.getElementById("toHigh").style.display = "block";
    console.log("Buhu");
  }
}
