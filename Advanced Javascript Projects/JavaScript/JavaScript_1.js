function cartoon_function() { //create a function using a switch statement//
    var cartoon_output;
    var cartoons = document.getElementById("cartoon_input").value; 
    var cartoon_string = " is a great cartoon!";
    switch (cartoons) {
        case "Scooby Doo":
            cartoon_output = "Scooby Doo" + cartoon_string;
        break;
        case "Spongebob Squarepants":
            cartoon_output = "Spongebob Squarepants" + cartoon_string;
        break;
        case "Looney Tunes":
            cartoon_output = "Looney Tunes" + cartoon_string;
        break;
        case "Courage the Cowardly Dog":
            cartoon_output = "Courage the Cowardly Dog" + cartoon_string;
        break;
        case "The Powerpuff Girls":
            cartoon_output = "The Powerpuff Girls" + cartoon_string;
        break;
        case "Ed, Edd, & Eddy":
            cartoon_output = "Ed, Edd, & Eddy" + cartoon_string;
        break;
        default: 
            cartoon_output = "Please enter a cartoon name exactly as shown on the list.";
    }
    document.getElementById("Output").innerHTML = cartoon_output;
}

function changeText(){ //utilize the getElementsByClassName() method//
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed";
}

//add javascript to an html canvas//
var c = document.getElementById("myFirstCanvas");
var ctx = c.getContext("2d");

//create circular gradient//
var grd = ctx.createRadialGradient(65, 40, 50, 130, 60, 120);
grd.addColorStop(0, "purple");
grd.addColorStop(1, "orange");

//fill canvas with gradient//
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 480, 225); 

//utilize createLinearGradient() method within a canvas//
const c2 = document.getElementById("mySecondCanvas");
const ctx2 = c2.getContext("2d");

const grd2 = ctx2.createLinearGradient(0, 0, 170, 0);
grd2.addColorStop(0, "black");
grd2.addColorStop(1, "white");

ctx2.fillStyle = grd2;
ctx2.fillRect(15, 15, 320, 145);