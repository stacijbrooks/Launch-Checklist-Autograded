// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(_document, _name, _diameter, _star, _distance, _moons, _imageUrl) {
    // Here is the HTML formatting for our mission target div.
    
                ` <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter:${_diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: $distance</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="">`
 };
 
 function validateInput(testInput) {
    // Check if the input is empty
    if (testInput.trim() === '') {
        return "Empty";
    }
    // Check if the input is a number
    else if (!isNaN(testInput)) {
        return "Is a Number";
    }
    // If neither empty nor a number, it's assumed to be a string
    else {
        return "Not a Number";
    }
 }
 
 function formSubmission(document, _list, pilot, copilot, fuelLevel, cargoLevel) {
    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    // Check fuel level
    if (fuelLevel < 10000) {
        faultyItems.style.visibility = 'visible';
        fuelStatus.toHavetextContent = 'Fuel level too low for launch';
        launchStatus.toHavetextContent = 'Shuttle Not Ready for Launch';
        launchStatus.style.color = 'red';
    }

    // Check cargo mass
    if (cargoLevel > 10000) {
        faultyItems.style.visibility = 'visible';
        cargoStatus.innerHTML = 'Cargo mass too high for launch';
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        launchStatus.style.color = 'red';
    }

    // If everything is good,  Shuttle is Ready for Launch
    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        launchStatus.toHavetextContent = ' Shuttle is Ready for Launch';
        launchStatus.style.color = 'green';
    }
}

    async function myFetch() {
     let planetsReturned;
     try {
        let response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
        planetsReturned = await response.json();
    } catch (error) {
        console.error('Error fetching planets:', error);
        planetsReturned = null;
    }

    return planetsReturned;
}

 
 function pickPlanet(planets) {
    let planet = planets[Math.floor(Math.random()*planets.length)];
    return planet;
 }
    
 

 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;