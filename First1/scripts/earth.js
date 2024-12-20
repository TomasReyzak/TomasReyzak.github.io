document.querySelector("h2").onclick = function () {
    alert ("Не тыкай!");
};

var myImage = document.querySelector("img");

myImage.onclick = function() {
    var sekondImage = myImage.getAttribute("src");

    if (sekondImage === "images/earth-1.png") {
        myImage.setAttribute("src", "images/earth-light.jpg");
    } else (
        myImage.setAttribute("src", "images/earth-1.png")
    );
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h2");

function setUserName() {
    var myName = prompt("Пожалуйста, введите своё имя.")
    localStorage.setItem("name", myName);
    myHeading.textContent = "Это моя практика, " + myName;
} 
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Снова на моей практике, " + storedName
}

myButton.onclick = function () {
    setUserName();
};