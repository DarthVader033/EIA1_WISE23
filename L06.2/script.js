

// index 0 1 2 3 4 

    if (yourChoice =="surrender") {
        let myAction = prompt (myArray[3]);
    }
    else if ("fight"){
        let myAction = prompt (myArray[3]);
    }



let myArray = [
    "You are stranded on the Death Star surrounded by imperial personell. You must escape and find your rebel friends. Are you choosing the left or right hallway?",
    "Darth Vader approaches you with his lightsaber drawn. Do you surrender or fight?",
    "Stormtroopers put you in binders and are leading you towards a prison cell. Do your surrender or fight?",
    "You die",
]

let yourChoice = prompt (myArray[0])

if (yourChoice == "left") {
   let myAction = prompt (myArray[1]);

    if (yourChoice == "surrender") {
        let myAction = prompt (myArray[3]);
    }
    else if ("fight") {
        let myAction = prompt (myArray[3]);
    }
    
} 

else if (yourChoice == "right") {
   let myAction = prompt (myArray[2]);
}
