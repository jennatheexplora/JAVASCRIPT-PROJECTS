document.write(typeof 7); //returns the type of data inside the parenthesis//

document.write("12" + 14); //type coercing the string "12" into a number and adding 14 to the end//

function nanFunction() {
    document.getElementById("nanTest").innerHTML = 0 / 0; //returns NaN because 0 can't be divided by 0//
}

function nan2Func() {
    document.getElementById("nan2Test").innerHTML = isNaN("peaches"); //returns true because peaches is not a number//
}

function nan3Func() {
    document.getElementById("nan3Test").innerHTML = isNaN("351"); //returns false because 351 is a number//
}

document.write(4E716); //return Infinity because the resulting number is too large//

document.write(-9E332); //return -Infinity because the resulting number is too large//

document.write(12 < 30); //return true//

console.log(15 * 3); //displays result in console//

console.log(21 < 6); //return false and display in console//

document.write(11 + 4 == 14); //return false and display on page//

console.log(12 - 3 == 9); //return true and display in console//

document.write(8 === 8); //return true by matching data type and value//

document.write("two" === 5); //return false by writing a different data type and different value//

document.write("thirteen" === 13); //return false by writing a different data type but the same value for both//

document.write(22 === 21); //return false by writing the same data type but a different value for both//

document.write(7 < 10 && 5 < 7); //AND operator//

document.write(6 > 7 && 8 < 9); 

document.write(3 < 5 || 4 > 2); //OR operator//

document.write(4 < 4 || 3 > 1);

function notFunction() {
    document.getElementById("Not").innerHTML = !(7 < 8); //NOT operator//
} 

function notFunction() {
    document.getElementById("Not").innerHTML = !(7 > 9); 
}
