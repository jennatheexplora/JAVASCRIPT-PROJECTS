var x = 12 //global variable//
function add_nums() {
    var y = 13; //local variable//
    document.write(y + x);
}
add_nums();

function mistake1() { //Intentionally write a function with an error in it and use the console.log() method to debug it within the console in the Chrome Dev Tools//
    var z = 7;
    console.log(3 * z);
}
//creates a local variable (z) and then attempts to use it globally, creating an error//
function mistake2() {
    console.log(20 + z);
}

function get_Date() { //get_Date function built in//
    if (new Date().getHours() < 12) { //IF statement//
        document.getElementById("ifStatement").innerHTML = "Good morning!";
    }
}

function win_orLose() {
    if (2 < 5)
        document.getElementById("winLose").innerHTML = "You win!"; //write your own if statement//
}

function many_Pets() {
    Pets = document.getElementById("Pets").value; //if else statement that produces a different result depending on the user's input//
    if (Pets < 1) {
        text = "You must be lonely!";
    }
    else {
        text = "Aren't you happy to always have a friend?";
    }
    document.getElementById("how_many_pets").innerHTML = text;
}

function time_Function() { //if, else, else if statement from assignment text//
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time.";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
