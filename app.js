//Selectors

const logoBar = document.querySelector(".span-n");
const logoN = document.querySelector(".h1-n");
const loadingDiv = document.querySelector(".loading-div");
const subH1 = document.querySelector(".sub-h1");
const loadingBarCont = document.querySelector(".loading-bar-container");
const loadingBar = document.querySelector(".loading-bar");
const firstPage = document.querySelector(".first-page");
const skills = document.querySelector(".skills");
const spanBar = document.querySelector(".span_");
const spanBarTwo = document.querySelector(".span_two");
const skillsHidden = document.querySelectorAll(".skills-hidden");
const mouseAnimate = document.querySelectorAll(".mouse");
const spanBarThree = document.querySelector(".span_three");
const path = document.querySelector("path");
const lineContainer = document.querySelector(".line-container");
const firstText = document.querySelector(".first-text-div");
const aboutCont = document.querySelector(".about-cont");
const spanBarFour = document.querySelector(".span_four");
const projectImg = document.querySelectorAll(".project-img");
const projectsCont = document.querySelectorAll(".projects-cont");
const spanBarFive = document.querySelector(".span_five");
const contactCont = document.querySelector(".contact-cont");

//Event Listeners

window.addEventListener("load", blinkerLoading);
document.addEventListener("keyup", writeN);
window.addEventListener("load", blinkerTwo);
window.addEventListener("load", blinkerSkills);
window.addEventListener("scroll", checkPosition);
window.addEventListener("scroll", checkPositionAbout);
document.addEventListener("mousemove", mouseHover);
document.addEventListener("mousemove", movingBg);
window.addEventListener("load", blinkerThree);
window.addEventListener("scroll", svgScroll);
window.addEventListener("load", blinkerFour);
window.addEventListener("load", blinkerFive);
for (var i = 0; i < projectImg.length; i++) {
  projectImg[i].addEventListener("mouseenter", greyOverlay);
}
for (var i = 0; i < projectImg.length; i++) {
  projectImg[i].addEventListener("mouseleave", greyOverlayOut);
}
window.addEventListener("scroll", checkPositionProjects);
window.addEventListener("scroll", checkPositionContact);

//Functions

function blinkerLoading() {
  setInterval(function () {
    logoBar.style.display = logoBar.style.display == "" ? "none" : "";
  }, 700);
}

function writeN(e) {
  if (e.key === "n") {
    logoN.style.display = "flex";
    logoBar.style.left = "55%";
    subH1.style.display = "none";
    loadingBarCont.style.display = "flex";
    loadingBar.classList = "loading-bar-start";
    setTimeout(function timeOut() {
      loadingDiv.style.display = "none";
      firstPage.style.display = "block";
      lineContainer.style.display = "block";
    }, 3000);
  }
}

function blinkerTwo() {
  setInterval(function () {
    spanBar.style.display = spanBar.style.display == "" ? "none" : "";
    
  }, 700);
}

function blinkerSkills() {
  setInterval(function () {
    spanBar.style.display = spanBar.style.display == "" ? "none" : "";
  }, 700);
}

function blinkerTwo() {
  setInterval(function () {
    spanBarTwo.style.display = spanBarTwo.style.display == "" ? "none" : "";
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
    spanBarThree.style.display = spanBarThree.style.display == "" ? "none" : "";
  }, 700);
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
  path.style.strokeDashoffset = pathLength - drawLength * 1;

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
    spanBarFour.style.display = spanBarFour.style.display == "" ? "none" : "";
  }, 700);
}

function greyOverlay(e) {
  const target = e.target;
  if (
    target.parentElement.className === "project-one" ||
    target.parentElement.className === "project-two"
  ) {
    target.className = "zoom-in";
  } else if (target.parentElement.className === "project-three") {
    target.className = "zoom-in-matante";
  }
}

function greyOverlayOut(e) {
  const target = e.target;
  if (target.parentElement.parentElement.className === "first-row") {
    target.className = "project-img";
  } else if (target.parentElement.parentElement.className === "sec-row") {
    target.className = "project-img";
  }
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
    spanBarFive.style.display = spanBarFive.style.display == "" ? "none" : "";
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
