const collage = document.getElementById("collage");
const dis = "grid";

const projectsBtn = document.getElementById("projects-btn");
const dancingBtn = document.getElementById("dancing-btn");
const myCatBtn = document.getElementById("my-cat-btn");
const personalLifeBtn = document.getElementById("personal-life-btn");

const projects = document.getElementById("projects");
const dancing = document.getElementById("dancing");
const myCat = document.getElementById("my-cat");
const personalLife = document.getElementById("personal-life");

const imageBtns = document.getElementById("grid")
const toTopBtn = document.getElementById("to-top");

projectsBtn.addEventListener("click", showProjects);
dancingBtn.addEventListener("click", showDancing);
myCatBtn.addEventListener("click", showMyCat);
personalLifeBtn.addEventListener("click", showPersonalLife);

hideAll();

function showProjects() {
  show(projects);
}

function showDancing() {
  show(dancing);
}

function showMyCat() {
  show(myCat);
}

function showPersonalLife() {
  show(personalLife);
}

function show(element) {
  imageBtns.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  if (element.style.display === dis) {
    setTimeout(function () {
      element.style.display = "none";
    }, 500);
  } else {
    setTimeout(
      function () {
        hideAll();
        element.style.display = dis;
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      },
      projects.style.display === "none" &&
        dancing.style.display === "none" &&
        myCat.style.display === "none" &&
        personalLife.style.display === "none"
        ? 1
        : 500
    );
  }
}

function hideAll() {
  projects.style.display = "none";
  dancing.style.display = "none";
  myCat.style.display = "none";
  personalLife.style.display = "none";
}

toTopBtn.addEventListener("click", scrollToTop);
window.onscroll = function () {
  scrollFunction();
};

function scrollToTop() {
  document.body.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
    hideAll();
  }
}

calcAge(new Date(2001, 5, 20), "age-max");
calcAge(new Date(2002, 5, 22), "age-elena");
calcAge(new Date(2021, 3, 21), "age-mio");
calcAge(new Date(2018, 10, 21), "age-dance");

function calcAge(birthDay, id) {
  let diff = Math.abs(new Date() - birthDay);
  let age = diff / (1000 * 60 * 60 * 24 * 365);
  let str;
  if (age < 1) {
    age = Math.floor(age * 12);
    str = " month";
  } else {
    age = Math.floor(age);
    str = " year";
  }

  if (age != 1) {
    str += "s";
  }
  try {
    document.getElementById(id).innerHTML = age + str;
  } catch (error) {}
}
