// LOAD HOME:
fetch("./modules/home.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("root").innerHTML = data;
});

// ROUTER: 
document.getElementById("home-button").addEventListener("click", function() {
    fetch("./modules/home.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("root").innerHTML = data;
    });
});

document.getElementById("bio-button").addEventListener("click", function() {
    fetch("./modules/bio.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("root").innerHTML = data;
    });
});

document.getElementById("experience-button").addEventListener("click", function() {
    fetch("./modules/experience.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("root").innerHTML = data;
    });
});

document.getElementById("portfolio-button").addEventListener("click", function() {
    fetch("./modules/portfolio.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("root").innerHTML = data;
    });
});
// END OF ROUTER

// MOBILE ROUTER
document.getElementById("home-button-mob").addEventListener("click", function() {
    fetch("./modules/home.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("root").innerHTML = data;
    });
});

document.getElementById("bio-button-mob").addEventListener("click", function() {
    fetch("./modules/bio.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("root").innerHTML = data;
    });
});

document.getElementById("experience-button-mob").addEventListener("click", function() {
    fetch("./modules/experience.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("root").innerHTML = data;
    });
});

document.getElementById("portfolio-button-mob").addEventListener("click", function() {
    fetch("./modules/portfolio.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("root").innerHTML = data;
    });
});
// END OF ROUTER

// STICKY NAVBAR

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}