//myLineUp prints all the data it receives to the console, concatenates it into one string
//and displays the selections on the webpage

function myLineUp(event) {
    event.preventDefault()
    let chosenStatus = document.querySelector('input[name="status"]:checked');
    let statusValue = chosenStatus ? chosenStatus.value : "";

    let chosenDate = document.querySelector('select[name="gameDate"]');
    let dateValue = chosenDate ? chosenDate.value : "";

    let chosenPlayers = document.querySelectorAll('#players input[type="checkbox"]:checked');
    let playersList = [];
    chosenPlayers.forEach(function(box) {
        playersList.push(box.name);
    });

    let playersValue = playersList.length > 0 ? playersList.join(", ") : "No players selected";

    let finalSummary = "Status: " + statusValue + ", " + " | Date: " + dateValue + " | Players: " + playersValue;
    
    console.log("Here is your lineup: ", finalSummary);

    let displayArea = document.getElementById("lineup-display");
    displayArea.textContent = finalSummary;
  }

document.addEventListener('DOMContentLoaded', function() {
    let submitButton = document.getElementById("submit");
    if (submitButton){
        submitButton.addEventListener('click', myLineUp);
    }
    else {
        console.error("No element");
    }
});