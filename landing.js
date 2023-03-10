//Selectors

const body = document.querySelector("body");
const logoBar = document.querySelector(".span-n");
const logoN = document.querySelector(".h1-n");
const subH1 = document.querySelectorAll(".sub-h1");
const loadingBarCont = document.querySelector(".loading-bar-container");
const loadingBar = document.querySelector(".loading-bar");
const lineContainer = document.querySelector(".line-container");
const firstPage = document.querySelector(".first-page");
const spanBar = document.querySelector(".span_");
const spanBarTwo = document.querySelectorAll(".span_two");
const skillsHidden = document.querySelectorAll(".skills-hidden");
const mouseAnimate = document.querySelectorAll(".mouse");
const spanBarThree = document.querySelectorAll(".span_three");
const path = document.querySelector("path");
const firstText = document.querySelector(".first-text-div");
const aboutCont = document.querySelector(".about-cont");
const priceCont = document.querySelector(".pricing-cont-total");
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
const contactFr = document.querySelector(".contact-fr");
const value = document.querySelector("#valeur");
const budget = document.querySelector("#budget");

//Event Listeners

window.addEventListener("load", blinkerTwo);
window.addEventListener("load", blinkerSkills);
window.addEventListener("scroll", checkPosition);
window.addEventListener("scroll", checkPositionAbout);
window.addEventListener("scroll", checkPositionPrice);
document.addEventListener("mousemove", mouseHover);
document.addEventListener("mousemove", movingBg);
window.addEventListener("load", blinkerThree);
window.addEventListener("scroll", myEventHandler);
window.addEventListener("load", blinkerFour);
window.addEventListener("load", blinkerFive);
window.addEventListener("scroll", checkPositionProjects);
window.addEventListener("scroll", checkPositionContact);
budget.addEventListener("input", budgetOutput);

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

function blinkerTwo() {
  setInterval(function () {
    spanBar.style.display = spanBar.style.display == "" ? "none" : "";
  }, 700);
}

function blinkerSkills() {
  setInterval(function () {
    spanBarTwo[0].style.display =
      spanBarTwo[0].style.display == "" ? "none" : "";
    spanBarTwo[1].style.display =
      spanBarTwo[1].style.display == "" ? "none" : "";
  }, 700);
}

function checkPosition() {
  const windowHeight = window.innerHeight;
  const positionFromTop = skillsHidden[0].getBoundingClientRect().top;
  if (positionFromTop - windowHeight <= -300) {
    skillsHidden[0].classList.remove("skills-hidden");
    skillsHidden[0].classList.add("fade-in-element");
  }
}

function checkPositionAbout() {
  const windowHeight = window.innerHeight;
  const positionFromTop = aboutCont.getBoundingClientRect().top;
  if (positionFromTop - windowHeight <= -120) {
    aboutCont.classList.remove("about-cont");
    aboutCont.classList.add("fade-in-about");
  }
}

function checkPositionPrice() {
  const windowHeight = window.innerHeight;
  const positionFromTop = priceCont.getBoundingClientRect().top;
  if (positionFromTop - windowHeight <= -120) {
    priceCont.classList.remove("pricing-cont-total");
    priceCont.classList.add("fade-pricing-cont-total");
  }
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

function blinkerThree() {
  setInterval(function () {
    spanBarThree[0].style.display =
      spanBarThree[0].style.display == "" ? "none" : "";
    spanBarThree[1].style.display =
      spanBarThree[1].style.display == "" ? "none" : "";
  }, 700);
}

function myEventHandler() {
  requestAnimationFrame(svgScroll);
}

let pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDashoffset = pathLength;

function svgScroll() {
  let scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  let drawLength = pathLength * scrollPercentage;
  path.style.strokeDashoffset = pathLength - drawLength * 1.05;

  scrollDistance = document.documentElement.scrollTop;
  let scrollLevel =
    ((document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight) /
      5.9) *
    100;
  if (scrollLevel <= 1) {
    firstText.style.opacity = 1 - scrollLevel;
  } else {
    firstText.style.opacity = "0";
  }
}

function blinkerFour() {
  setInterval(function () {
    spanBarFour[0].style.display =
      spanBarFour[0].style.display == "" ? "none" : "";
    spanBarFour[1].style.display =
      spanBarFour[1].style.display == "" ? "none" : "";
  }, 700);
}

function checkPositionProjects() {
  const windowHeight = window.innerHeight;
  const positionFromTop = projectsCont[0].getBoundingClientRect().top;
  if (positionFromTop - windowHeight <= -150) {
    projectsCont[0].classList.remove("projects-cont");
    projectsCont[0].classList.add("fade-in-projects");
  }
}

function blinkerFive() {
  setInterval(function () {
    for (i = 0; i < spanBarFive.length; i++) {
      spanBarFive[i].style.display =
        spanBarFive[i].style.display == "" ? "none" : "";
    }
  }, 700);
}

function checkPositionContact() {
  const windowHeight = window.innerHeight;
  const positionFromTop = contactCont.getBoundingClientRect().top;
  if (positionFromTop - windowHeight <= -150) {
    contactCont.classList.remove("contact-cont");
    contactCont.classList.add("fade-in-contact");
  }
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
  skillsLink.id = "skills-link";
  contactFr.innerHTML = "contacter";
  enElems.forEach((enElem) => {
    enElem.style.display = "none";
  });
  frElems.forEach((frElem) => {
    frElem.style.display = "";
  });
}

function changeLangEn() {
  skillsLink.id = " ";
  contactFr.innerHTML = "contact";
  frElems.forEach((frElem) => {
    frElem.style.display = "none";
  });
  enElems.forEach((enElem) => {
    enElem.style.display = "";
  });
}

function budgetOutput() {
  value.textContent = budget.value;
}

body.style.display = "block";
