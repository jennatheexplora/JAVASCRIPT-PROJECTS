window.alert("Hello, world"); //creates a popup window upon the page opening//

var Sent1 = "This is the beginning of the string", Sent2 = " and this is the end of the string. "; //assigning values (string type) to variables//
var fullSent = Sent1 + Sent2; //concatenates the two strings//
document.write(fullSent); //displays the text of var fullSent on the page//

document.write(2 + 17); //an expression//

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  } //practuce using an event//