let country = document.getElementById("country");
let maritalStatusContainer = document.getElementById("marital-status-container")
let maritialStatus = document.getElementsByClassName("spain-field")

document.getElementById("country").addEventListener("update", countryVisibility())

function countryVisibility () {
    console.log("entered countryVisibility function");
    console.log(country.value);
    if (country.value == "Spain") {
        maritalStatusContainer.classList.add(hidden);
    };
    return;
}