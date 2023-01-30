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

