let myvariable = 1; 

console.log(myvariable);


let yourChoice = prompt ("You are standed on the Death Star sourrounded  by imperial personell. You must escape and find your rebel friends. Are you choosing the left or right hallway?");

if (yourChoice == "left") {
   let myAction = prompt ("Darth Vader approaches you with his lightsaber drawn. Do you surrender or fight?");

    if (yourChoice == "surrender") {
        let myAction = prompt ("you are put in a prison cell and are now sceduled for execution. Your only hope are the Rebels.")
    }
    else if ("fight") {
        let myAction = prompt ("You die.")
    }
    
} 

else if (yourChoice == "right") {
   let myAction = prompt ("Stormtroopers put you in binders and are leading you towards a prison cell. Do you surrender or fight? ");
    if (yourChoice =="surrender") {
        let myAction = prompt ("Your are put in a prison cell and are now sceduled for execution. Your only hope are the rebels.")
    }
    else if ("fight"){
        let myAction = prompt ("You die.")
    }

}


