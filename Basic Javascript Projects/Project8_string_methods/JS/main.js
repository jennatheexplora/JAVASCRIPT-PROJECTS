function full_Sentence() { //utilize the concat() method to connect two or more strings//
    var sent1 = "I am really ";
    var sent2 = "dying for a ";
    var sent3 = "warm cinnamon roll ";
    var sent4 = "right now.";
    var wholeSent = sent1.concat(sent2, sent3, sent4);
    document.getElementById("Concatenate").innerHTML = wholeSent;
}

function slice_Method() { //write a slice() method that displays a section of a string//
    var Sentence = "You're gonna need a bigger boat"; 
    var Section = Sentence.slice(19,31);
    document.getElementById("Slice").innerHTML = Section;
}

function upperCase() { //write and execute the toUpperCase() method//
    var str1 = "living la vida loca";
    var string1 = str1.toUpperCase();
    document.getElementById("upper").innerHTML = string1;
}

function strSearch() { //write and execute the search() method//
    var textSent = "When you're here, you're family.";
    var located = textSent.search("family");
    document.getElementById("search").innerHTML = located;
}

function numsTo_string() { //utilize the toString() method to return a number as a string//
    var x = 38;
    document.getElementById("stringMethod").innerHTML = x.toString();
}

function preciseNums() { //utilize the toPrecision() method to return a string as a number of a specified length//
    var y = 429375.2783691820102;
    document.getElementById("precise").innerHTML = y.toPrecision(9);
}

function fixedDec() { //converts a number to a string, rounded to a specified number of decimals//
    var z = 928.935719823;
    var fNum = z.toFixed(3);
    document.getElementById("toFixed").innerHTML = fNum;
}

function Value() { //returns the primitive value of a string//
    var text = "Buenos Dias";
    var Val = text.valueOf();
    document.getElementById("valueOF").innerHTML = Val;
}
