document.addEventListener("DOMContentLoaded", function () {
    const foodsBtn = document.getElementById("foodsBtn");
    const drinksBtn = document.getElementById("drinksBtn");
    const foodsDiv = document.querySelector("#foods");
    const drinksDiv = document.querySelector("#drinks");

    foodsDiv.style.display = "none";
    drinksDiv.style.display = "none";

    foodsBtn.addEventListener("click", function () {
        foodsDiv.style.display = "block";
        drinksDiv.style.display = "none";
    });

    drinksBtn.addEventListener("click", function () {
        drinksDiv.style.display = "block";
        foodsDiv.style.display = "none";
    });
});
