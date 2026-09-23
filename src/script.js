const displayMode = "grid";

const projectsButton = document.getElementById("projects-btn");
const dancingButton = document.getElementById("dancing-btn");
const myCatButton = document.getElementById("my-cat-btn");
const personalLifeButton = document.getElementById("personal-life-btn");

const projects = document.getElementById("projects");
const dancing = document.getElementById("dancing");
const myCat = document.getElementById("my-cat");
const personalLife = document.getElementById("personal-life");

const imageButtons = document.getElementById("grid");
const toTopButton = document.getElementById("to-top");

projectsButton.addEventListener("click", showProjects);
dancingButton.addEventListener("click", showDancing);
myCatButton.addEventListener("click", showMyCat);
personalLifeButton.addEventListener("click", showPersonalLife);

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
    imageButtons.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    if (element.style.display === displayMode) {
        setTimeout(function () {
            element.style.display = "none";
        }, 500);
    } else {
        setTimeout(
            function () {
                hideAll();
                element.style.display = displayMode;
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                });
            },
            projects.style.display === "none" && dancing.style.display === "none" && myCat.style.display === "none" && personalLife.style.display === "none" ? 1 : 500
        );
    }
}

function hideAll() {
    projects.style.display = "none";
    dancing.style.display = "none";
    myCat.style.display = "none";
    personalLife.style.display = "none";
}

toTopButton.addEventListener("click", scrollToTop);
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
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
        hideAll();
    }
}

calcAge(new Date(2001, 5, 20), "age-max");
calcAge(new Date(2021, 3, 21), "age-mio");
calcAge(new Date(2018, 10, 21), "age-dance");

function calcAge(birthDay, id) {
    let elapsedTime = Math.abs(new Date() - birthDay);
    let age = elapsedTime / (1000 * 60 * 60 * 24 * 365);
    let timeUnit;
    if (age < 1) {
        age = Math.floor(age * 12);
        timeUnit = " month";
    } else {
        age = Math.floor(age);
        timeUnit = " year";
    }

    if (age !== 1) {
        timeUnit += "s";
    }
    try {
        document.getElementById(id).innerHTML = age + timeUnit;
    } catch (error) {}
}
