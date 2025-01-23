let country = document.getElementById("country");
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let dateOfBirth = document.getElementById("date-of-birth");
let holidayAllowance = document.getElementById("holiday-allowance");
let maritalStatus = document.getElementById("marital-status");
let socialInsuranceNumber = document.getElementById("social-insurance-number");
let numberOfChildren = document.getElementById("number-of-children");
let workingHours = document.getElementById("working-hours");

let spainFields = document.getElementsByClassName("spain-field");
let ghanaFields = document.getElementsByClassName("ghana-field");
let brazilFields = document.getElementsByClassName("brazil-field");
let selectiveFields = document.getElementsByClassName("selective-field");

let person = {
    country: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    holidayAllowance: "",
    maritalStatus: "",
    socialInsuranceNumber: "",
    numberOfChildren: "",
    workingHours: ""
}

//This function checks the country and toggles the hidden class on or off
//depending on the country entered. Inputs are identified by their class
//and there is a class used for each country that requires unique firlds.
//The country input checks continuously as anything is being typed
//so it is able to update immediately as someone types.
function countryVisibility() {
    if (country.value == "Spain") {
        for (let i = 0; i < spainFields.length; i++) {
            spainFields[i].classList.remove("hidden");
            spainFields[i].setAttribute("required", true);
        }
    } else if (country.value == "Ghana") {
        for (let i = 0; i < ghanaFields.length; i++) {
            ghanaFields[i].classList.remove("hidden");
            ghanaFields[i].setAttribute("required", true);
        }
    } else if (country.value == "Brazil") {
        for (let i = 0; i < brazilFields.length; i++) {
            brazilFields[i].classList.remove("hidden");
            brazilFields[i].setAttribute("required", true);
        }
    } else {
        for (let i = 0; i < selectiveFields.length; i++) {
            selectiveFields[i].classList.add("hidden");
            selectiveFields[i].removeAttribute("required", false);
        }
    }
}

// This function collects the values of all the fields and combines 
// them into an object before converting that object into a JSON
function sendInformation() {
    person.country = country.value;
    person.firstName = firstName.value;
    person.lastName = lastName.value;
    person.dateOfBirth = dateOfBirth.value;
    person.holidayAllowance = holidayAllowance.value;
    person.maritalStatus = maritalStatus.value;
    person.socialInsuranceNumber = socialInsuranceNumber.value;
    person.numberOfChildren = numberOfChildren.value;
    person.workingHours = workingHours.value;
    let jsonPerson = JSON.stringify(person);
    console.log(jsonPerson);
    return false;
}