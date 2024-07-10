/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  // Generar excusa aleatoria
  let whoRan = getRandomElement(who.length);
  let actionRan = getRandomElement(action.length);
  let whatRan = getRandomElement(what.length);
  let whenRan = getRandomElement(when.length);

  function generateExcuse() {
    let excuse = `${getRandomElement(who)} ${getRandomElement(
      action
    )} ${getRandomElement(what)} ${getRandomElement(when)}`;
    return excuse;
  }

  document
    .getElementById("generate-excuse-button")
    .addEventListener("click", function() {
      document.getElementById("excuse").innerHTML = generateExcuse();
    });
};
