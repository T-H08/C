console.log("Das ist ein Test")
let zufallszahl = Math.floor(Math.random() * 100);

function clickbutton() {
    let benutzereingabe = parseInt(document.getElementById("input").value)
    console.log("Deine Zufallszahl: " + zufallszahl)
    if (benutzereingabe == zufallszahl) {
        console.log("Deine Zahl ist richtig!")
    }
    else {
        console.log("Leider falsch")
    }
}