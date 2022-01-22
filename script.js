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
  document
    .getElementById("content")
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
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
