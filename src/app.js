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

  let whoRan = Math.floor(Math.random() * who.length);
  let actionRan = Math.floor(Math.random() * action.length);
  let whatRan = Math.floor(Math.random() * what.length);
  let whenRan = Math.floor(Math.random() * when.length);

  let excuse =
    who[whoRan] +
    " " +
    action[actionRan] +
    " " +
    what[whatRan] +
    " " +
    when[whenRan];

  document.getElementById("excuse").innerText = excuse;
};
