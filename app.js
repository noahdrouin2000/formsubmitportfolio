//Selectors

const logoBar = document.querySelector(".span-n");
const logoN = document.querySelector(".h1-n");
const loadingDiv = document.querySelector(".loading-div");
const subH1 = document.querySelectorAll(".sub-h1");
const loadingBarCont = document.querySelector(".loading-bar-container");
const loadingBar = document.querySelector(".loading-bar");
const lineContainer = document.querySelector(".line-container");
const firstPage = document.querySelector(".first-page");
const frBtn = document.querySelector(".fr-a");
const enBtn = document.querySelector(".en-a");
const frElems = document.querySelectorAll("body [lang='fr']");
const enElems = document.querySelectorAll("body [lang='en']");
const frBtnStart = document.querySelector(".fr-start");
const enBtnStart = document.querySelector(".en-start");
const mouseAnimate = document.querySelectorAll(".mouse");

//Event Listeners

window.addEventListener("load", visited);
frBtnStart.addEventListener("click", changeLangFr);
frBtn.addEventListener("click", changeLangFr);
enBtnStart.addEventListener("click", changeLangEn);
enBtn.addEventListener("click", changeLangEn);
document.addEventListener("mousemove", mouseHover);

//Functions

function visited() {
  setInterval(function () {
    logoBar.style.display = logoBar.style.display == "" ? "none" : "";
  }, 700);
  window.addEventListener("keydown", writeN);
  function writeN(e) {
    if (e.key === "n") {
      logoN.style.display = "flex";
      logoBar.style.left = "55%";
      subH1[0].style.display = "none";
      subH1[1].style.display = "none";
      loadingBarCont.style.display = "flex";
      loadingBar.classList = "loading-bar-start";
      setTimeout(function () {
        window.location = "./landing.html";
      }, 3000);
    }
  }
}

function mouseHover(e) {
  setTimeout(function () {
    const y = e.pageY;
    const x = e.pageX;
    const scrollLeft = window.pageXOffset;
    const scrollTop = window.pageYOffset;
    mouseAnimate.style.left = x - scrollLeft + "px";
    mouseAnimate.style.top = y - scrollTop + "px";
  }, 125);
}

function changeLangFr() {
  skillsLink.id = " ";
  contactFr.innerHTML = "contacter";
  enElems.forEach((enElem) => {
    enElem.style.display = "none";
  });
  frElems.forEach((frElem) => {
    frElem.style.display = "";
  });
}

function changeLangEn() {
  skillsLink.id = "skills-link";
  contactFr.innerHTML = "contact";
  frElems.forEach((frElem) => {
    frElem.style.display = "none";
  });
  enElems.forEach((enElem) => {
    enElem.style.display = "";
  });
}
