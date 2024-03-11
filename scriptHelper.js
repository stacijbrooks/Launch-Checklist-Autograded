// Write your helper functions here!

//require('cross-fetch/polyfill');

let addDestinationInfo = (document, name, diameter, star, distance, moons, imageUrl) => {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML =
        `<h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">`;
};

let validateInput = (testInput) => {
    if (testInput === '') {
        return "Empty";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    } else {
        return "Not a Number";
    }
};

let formSubmission = (document, pilot, copilot, fuelLevel, cargoMass) => {
    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoMass === "") {
        console.log("All fields are required!");
        return;
    }
    
    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    let fuelLevelValidation = validateInput(fuelLevel);
    let cargoMassValidation = validateInput(cargoMass);

    if (fuelLevelValidation === "Is a Number" || cargoMassValidation === "Is a Number") {
       console.log("Fuel level and cargo mass must be numbers!");
        return;
    }

    fuelLevel = Number(fuelLevel);
    cargoMass = Number(cargoMass);

    if (fuelLevel < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'red';
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }

    if (cargoMass > 10000) {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'red';
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    if (fuelLevel >= 10000 && cargoMass <= 10000) {
        faultyItems.style.visibility = "hidden"; // Set visibility to "hidden" for successful launch
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = 'green';
    } else {
        faultyItems.style.visibility = "visible"; // Set visibility to "visible" for unsuccessful launch
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'red';
    }
};

let myFetch = async () => {
    try {
        let response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
        if (!response.ok) {
            throw new Error("Failed to fetch planets data");
        }
        return await response.json();
    } catch (error) {
        console.error(error.message);
        return [];
    }
};

let pickPlanet = (planets = []) => {
    let randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
};

 

 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;