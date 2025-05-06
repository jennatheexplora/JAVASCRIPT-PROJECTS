//execute a while loop//
function Call_Loop() {
    var text = "";
    var x = 0;
    while (x < 13) {
        text += "<br>The number is " + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = text;
}

//use the string length property//
function str_Length() {
    var Ltext = "May the force be with you";
    var length = Ltext.length;
    document.getElementById("Length").innerHTML = length;
}

//create a for loop//
function for_Loop() {
    var Instruments = ["Fiddle", "Harmonica", "Clarinet", "Tuba", "Viola", "Chimes"];
    var Content = "";
    var Y;
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//a function with the document.getElementById().innerHTML method (that references the id attribute in your HTML code) to display a value of your array//
function array_Function() {
    var Twilight_Books = [];
    Twilight_Books[0] = "Midnight Sun";
    Twilight_Books[1] = "Twilight";
    Twilight_Books[2] = "New Moon";
    Twilight_Books[3] = "Eclipse";
    Twilight_Books[4] = "Breaking Dawn"; 
    document.getElementById("Array").innerHTML = "This book in the Twilight Saga is " + Twilight_Books[3] + ".";
}

//create an object through utilization of the const keyword//
function const_Function() {
    const Dog_Breed = {type:"Border Collie", coat:"long", color:"mixed"}; //create object, properties with values//
    Dog_Breed.color = "black and white"; //change a property value//
    Dog_Breed.class = "working";
    document.getElementById("Const").innerHTML = "The " + Dog_Breed.type + " is a " + Dog_Breed.color + " " + Dog_Breed.class + " class dog."; //display results in a string//
}

//utilize the let keyword//
var X = 21; 
console.log(X);
{let X = 35; //block scope//
    console.log(X); 
}
console.log(X);

//return function//
let z = retFunction(4, 3); 
document.getElementById("retFunc").innerHTML = z;

function retFunction(a, b) {
  return a * b;   
}  

let Pasta = { //object with let keyword//
    noodle: "Fettucini", //properties//
    sauce: "Alfredo",
    topping: "Chicken",
    description : function() { //method//
        return "I would like to eat some " + this.noodle + " " + this.sauce + " with " + this.topping + ".";
    }
};
document.getElementById("Pasta_Object").innerHTML = Pasta.description() ; 

