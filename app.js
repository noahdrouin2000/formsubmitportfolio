//Selectors

const body = document.querySelector("body");
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
document.addEventListener("mousemove", mouseHover);
document.addEventListener("mousemove", mouseHover);

//Functions

let lang = localStorage.getItem("lang");

if (!lang) {
  localStorage.setItem("lang", "fr");
  lang = "fr";
}

if (lang === "fr") {
  changeLangFr();
} else {
  changeLangEn();
}

frBtn.addEventListener("click", () => {
  lang = "fr";
  localStorage.setItem("lang", lang);
  location.reload();
});
enBtn.addEventListener("click", () => {
  lang = "en";
  localStorage.setItem("lang", lang);
  location.reload();
});

function changeLangFr() {
  enElems.forEach((enElem) => {
    enElem.style.display = "none";
  });
  frElems.forEach((frElem) => {
    frElem.style.display = "";
  });
}

function changeLangEn() {
  frElems.forEach((frElem) => {
    frElem.style.display = "none";
  });
  enElems.forEach((enElem) => {
    enElem.style.display = "";
  });
}

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
    mouseAnimate[0].style.left = x - scrollLeft + "px";
    mouseAnimate[0].style.top = y - scrollTop + "px";
  }, 125);
}
