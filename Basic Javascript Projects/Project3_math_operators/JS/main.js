function addition_Function() {
    var addition = 4 + 5;
    document.getElementById("Math").innerHTML = "4 + 5 = " + addition; //addition function//
}

function subtraction_Function() {
    var subtraction = 12 - 7;
    document.getElementById("Math").innerHTML = "12 - 7 = " + subtraction; //subtraction function//
}

function multiplication() {
    var simple_Math = 3 * 9;
    document.getElementById("Math").innerHTML = "3 * 9 = " + simple_Math; //multiplication function//
}

function division() {
    var simple_Math = 56 / 8;
    document.getElementById("Math").innerHTML = "56 / 8 = " + simple_Math; //division function//
}

function more_Math() {
    var simple_Math = (3 + 4) * 6 / 2 - 1;
    document.getElementById("Math").innerHTML = "3 plus 4, multiplied by 6, divided in half and then subtracted by 1 equals " + simple_Math; //multi-step problem//
}

function modulus_Operator() {
    var simple_Math = 31 % 4;
    document.getElementById("Math").innerHTML = "When you divide 31 by 4 you have a remainder of: " + simple_Math; //modulus/remainder function//
}

function negation_Operator() {
    var x = 11;
    document.getElementById("Math").innerHTML = -x; //flips the number from positive to negative and vice versa//
}

var y = 3.45;
y--;
document.write(y); //displays the result of decrementing the variable// 

var z = 7;
z++;
document.write(z); //displays the result of incrementing the variable//

window.alert(Math.random() * 40); //produces a window with a random number between 0 and 40//

function powerFunc() {
    document.getElementById("power").innerHTML = Math.pow(8,2); //gets the value of 8 to the power of 2//
}
