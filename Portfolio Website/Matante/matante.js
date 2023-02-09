//Selectors

const firstPage = document.querySelector(".first-page");
const spanBar = document.querySelector(".span_");
const spanBarTwo = document.querySelectorAll(".span_two");
const skillsHidden = document.querySelectorAll(".skills-hidden");
const mouseAnimate = document.querySelectorAll(".mouse");
const spanBarThree = document.querySelectorAll(".span_three");
const path = document.querySelector("path");
const lineContainer = document.querySelector(".line-container");
const firstText = document.querySelector(".first-text-div");
const aboutCont = document.querySelector(".about-cont");
const spanBarFour = document.querySelectorAll(".span_four");
const projectImg = document.querySelectorAll(".project-img");
const projectsCont = document.querySelectorAll(".projects-cont");
const spanBarFive = document.querySelectorAll(".span_five");
const contactCont = document.querySelector(".contact-cont");
const frBtn = document.querySelector(".fr-a");
const enBtn = document.querySelector(".en-a");
const frElems = document.querySelectorAll("body [lang='fr']");
const enElems = document.querySelectorAll("body [lang='en']");
const skillsLink = document.getElementById("skills-link");
const frBtnStart = document.querySelector(".fr-start");
const enBtnStart = document.querySelector(".en-start");
const contactFr = document.querySelector(".contact-fr");
const openContA = document.querySelector(".open-cont-a");
const blueArrow = document.getElementById("blue-arrow");
const whiteArrow = document.getElementById("white-arrow");
const techA = document.querySelector(".tech-a");
const techUl = document.querySelector(".tech-ul");
const h4Projet = document.querySelector(".h4-projet");

//Event Listeners

window.addEventListener("load", blinkerLoading);
window.addEventListener("load", blinkerTwo);
document.addEventListener("mousemove", mouseHover);
document.addEventListener("mousemove", movingBg);
frBtn.addEventListener("click", changeLangFr);
enBtn.addEventListener("click", changeLangEn);
openContA.addEventListener("mouseenter", arrowAnimStart);
openContA.addEventListener("mouseleave", arrowAnimEnd);
techA.addEventListener("mouseenter", showAnimStart);
techA.addEventListener("mouseleave", showAnimEnd);

//Functions

function blinkerLoading() {
  enElems.forEach((enElem) => {
    enElem.style.display = "none";
  });
}

function blinkerTwo() {
  setInterval(function () {
    spanBar.style.display = spanBar.style.display == "" ? "none" : "";
  }, 700);
}

function movingBg(e) {
  mousePosY = e.clientY;
  mousePosX = e.clientX;
  firstPage.style.backgroundPositionX =
    (mousePosX - window.innerWidth / 2) / 900 + "rem";
  firstPage.style.backgroundPositionY =
    (mousePosY - window.innerHeight / 2) / 900 + "rem";
}

function mouseHover(e) {
  setTimeout(function () {
    const y = e.pageY;
    const x = e.pageX;
    const scrollLeft = window.pageXOffset;
    const scrollTop = window.pageYOffset;
    mouseAnimate[0].style.left = x - scrollLeft + "px";
    mouseAnimate[0].style.top = y - scrollTop + "px";
  }, 125);
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function changeLangFr() {
  h4Projet.innerText = "Projet ";
  enElems.forEach((enElem) => {
    enElem.style.display = "none";
  });
  frElems.forEach((frElem) => {
    frElem.style.display = "";
  });
}

function changeLangEn() {
  h4Projet.innerText = "Project ";
  frElems.forEach((frElem) => {
    frElem.style.display = "none";
  });
  enElems.forEach((enElem) => {
    enElem.style.display = "";
  });
}

function arrowAnimStart() {
  blueArrow.style.right = "-1.4rem";
  whiteArrow.style.left = "6rem";
}

function arrowAnimEnd() {
  whiteArrow.style.left = "-1.4rem";
  blueArrow.style.right = "0";
}

function showAnimStart() {
  techUl.style.left = "0";
}

function showAnimEnd() {
  techUl.style.left = "-12.8rem";
}
