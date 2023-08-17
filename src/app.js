/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = str;
    location.reload();
  });

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let RandomDecimal = Math.random();
  let RandomNumber_4 = Math.floor(RandomDecimal * 4);
  let RandomNumber_5 = Math.floor(RandomDecimal * 5);
  let str = "";
  str =
    who[RandomNumber_4] +
    " " +
    action[RandomNumber_4] +
    " " +
    what[RandomNumber_4] +
    " " +
    when[RandomNumber_5];
  document.querySelector("#the-excuse").innerHTML = str;

  console.log(str);
};
