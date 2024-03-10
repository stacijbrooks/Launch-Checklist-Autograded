// Write your JavaScript code here!
<script src="scriptHelper.js"></script>
// const { myFetch, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form[data-testid='testForm']");
    let listedPlanets;
    console.log("window loaded")
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        let randomPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(
            document,
            randomPlanet.name,
            randomPlanet.diameter,
            randomPlanet.star,
            randomPlanet.distance,
            randomPlanet.moons,
            randomPlanet.imageUrl
        )
        //console.log(listedPlanets);  // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    }).then(function () {
        console.log(listedPlanets);
       
    }).catch(function (error) {
        // Handle any errors that occur during the fetch operation
        console.error('Error fetching planets:', error);
    

    //add event listener for button
    form.addEventListener("submit", function(event) {
        // Prevent default form submission behavior
        event.preventDefault();
        let pilot = document.querySelector("input[name='pilotName']");
        let copilot = document.querySelector("input[name='copilotName']");
        let fuelLevel = document.querySelector("input[name='fuelLevel']");
        let cargoLevel = document.querySelector("input[name='cargoMass']");

    formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoLevel)
    });
});

        // Call the formSubmission function with the selected input elements
    //formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });
    //call function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    //this is inside event listener /document =, list =
    
 