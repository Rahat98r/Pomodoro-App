const focus = document.querySelector(".one");
const ShortBreak = document.querySelector(".two");
const longBreak = document.querySelector(".three");
const start = document.querySelector(".startbtn");
const min = document.querySelector(".min");
const second = document.querySelector(".second");
focus.style.background = "red";

let mins = 25;
let secons = 0;
let intervalId = null;
const alarm = new Audio("alarm.mp3");
function defTime() {
  if (secons === 0 && mins > 0) {
    mins--;
    secons = 59;
  } else if (mins === 0) {
    clearInterval(intervalId);
    intervalId = null;
    alarm.play();
    return;
  } else {
    secons--;
  }

  second.textContent = secons.toString().padStart(2, "0");

  min.textContent = mins.toString().padStart(2, "0");
}

start.addEventListener("click", () => {
  if (intervalId) return;

  intervalId = setInterval(defTime, 1000);
});
focus.addEventListener("click", () => {
  mins = 25;
  secons = 0;
  focus.style.background = "red";
  ShortBreak.style.background = "#3d3f43";
  longBreak.style.background = "#3d3f43";

  second.textContent = secons.toString().padStart(2, "0");

  min.textContent = mins.toString().padStart(2, "0");
  if (mins === 0) return;
  clearInterval(intervalId);
  intervalId = null;
});
ShortBreak.addEventListener("click", () => {
  mins = 5;
  secons = 0;
  min.textContent = mins.toString().padStart(2, "0");
  second.textContent = secons.toString().padStart(2, "0");

  ShortBreak.style.background = "red";
  longBreak.style.background = "#3d3f43";
  focus.style.background = "#3d3f43";
  if (mins === 0) return;
  clearInterval(intervalId);
  intervalId = null;
});
longBreak.addEventListener("click", () => {
  mins = 30;
  secons = 0;
  min.textContent = mins.toString().padStart(2, "0");
  second.textContent = secons.toString().padStart(2, "0");

  focus.style.background = "#3d3f43";
  ShortBreak.style.background = "#3d3f43";
  longBreak.style.background = "red";

  if (mins === 0) return;
  clearInterval(intervalId);
  intervalId = null;
});
