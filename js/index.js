function tempChangeColour(elem) {
  elem.classList.add("surname-let-active"); 
  setTimeout(()=>elem.classList.remove("surname-let-active"), 200);
}

function surnameLight() {
  document.querySelectorAll(".surname-let")
    .forEach((elem, index)=>setTimeout(()=>tempChangeColour(elem), index * 100));
}

function surnameOn() {
  document.querySelectorAll(".surname-let")
    .forEach(elem=>elem.classList.add("surname-let-active")); 
  document.querySelector(".about").style.background = 
  "radial-gradient(var(--black) 50%, #000000)";
}

function moveName() {
  let name = document.querySelector(".name");
  setTimeout(surnameLight, 1000);
  setTimeout(surnameOn, 2500);
}

function randomNum(min, max) {
  return Math.floor(Math.random() * max + min);
}

(function shakeSkill() {
  let skills = document.querySelectorAll(".skills-item--in");
  let chunk = randomNum(0, skills.length);
  skills[chunk].classList.add("skills-item--shake");
  setTimeout(()=>skills[chunk].classList.remove("skills-item--shake"), 1000);
  setTimeout(()=>shakeSkill(), 3500);
})();

window.addEventListener("load", ()=>moveName());



(function addEvents() {
  let courseJs = document.getElementById("course_js");
  let courseCppRed = document.getElementById("course_cpp_red");
  let courseCppYellow = document.getElementById("course_cpp_yellow");
  let courseCppWhite = document.getElementById("course_cpp_white");
})();
