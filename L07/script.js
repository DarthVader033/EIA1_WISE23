let stories1= 1;

function startGame() {
    updateOutput("A long time ago in a galxy far, far away");
}

function handleInput(event) {
    if (event.key === "Enter") {
        const inputElement = document.getElementById("input");
        const userInput = inputElement.value.toLowerCase();

        

        // Clear the input field
        inputElement.value = "0";

    
    }}

function firstquestion() {
updateOutput("You are stranded on the Death Star surrounded by imperial personell. You must escape and find your rebel friends. Are you choosing the left or right hallway?");
}

function handleInputStories1(userInput) {
    if (userInput.includes("left")) {
        updateOutput("Darth Vader approaches you with his lightsaber drawn. Do you surrender or fight? ")
        
         } 
         if (userInput.includes("surrender")) {
        updateOutput("You die.");
         }
          else if (userInput.includes("fight")) {
        updateOutput("You die.")
         }
          else {
        updateOutput("Error. You cannot decieve the Empire.");
         
    }}


    

function handleInputStories2(userInput) {
    if (userInput.includes("right")) {
        updateOutput("Stormtroopers put you in. Binders and are leading you towards a  prison cell. Do you surrender or fight? ");
     
      if (userInput.includes("surrender")) {
        updateOutput("You die.");
    }
     else if (userInput.includes("fight")) {
            updateOutput("You die.");
    } 
    else {
        updateOutput("Error. You cannot decieve the Empire.");
    }
    
}}

function updateOutput(message) {
    document.getElementById("output").innerHTML = message;
}

// Start the adventure when the page loads
startAdventure();
