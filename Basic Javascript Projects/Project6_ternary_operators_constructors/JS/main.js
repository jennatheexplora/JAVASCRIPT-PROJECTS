//copy this code from the assignment page to reference for Ternary Operators//
function Ride_Function() {
    var Height, can_Ride;
    Height = document.getElementById("Height").value;
    can_Ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = can_Ride + " to ride.";
}

//ternary operators challenge//
function Vote_Function() {
    var Age, can_Vote;
    Age = document.getElementById("Age").value;
    can_Vote = (Age < 18) ? "You are not old enough to vote" : "You can vote!";
    document.getElementById("Vote").innerHTML = can_Vote;
}

function Vehicle(Make, Model, Year, Color) { //using constructors, copied from assignment text for reference//
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Livestock(Group, Foot, Coat, Diet) { //New and This keywords//
    this.Livestock_Group = Group;
    this.Livestock_Foot = Foot;
    this.Livestock_Coat = Coat;
    this.Livestock_Diet = Diet;
}
var Cow = new Livestock("Mammal", "Cloven Hooves", "Hair", "Herbivore");
var Pig = new Livestock("Mammal", "Cloven Hooves", "Hair", "Omnivore");
var Chicken = new Livestock("Bird", "Clawed Toes", "Feathers", "Omnivore");
function farmFunction() {
    document.getElementById("New_and_This").innerHTML = "The Chicken is a " + Chicken.Livestock_Group + " covered in " + Chicken.Livestock_Coat + " who has " + Chicken.Livestock_Foot + " and is a(n) " + Chicken.Livestock_Diet;
}

// Constructor function for Person objects//
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
// Create two Person objects//
const myFather = new Person("Thomas", "James", 57, "brown");
const myMother = new Person("Robin", "Diane", 56, "green");
// Display age//
function familyFunction() {
    document.getElementById("family").innerHTML =
        "My father is " + myFather.age + ". My mother is " + myMother.age + ".";
}

//Nested functions//
function count_Func() {
    document.getElementById("nested_function").innerHTML = counter(); //outer function, returns result of inner functions to the page//
    function counter() { //inner function//
        var count = 0;
        function increment() { //inner function//
            count += 1;
        }
        increment(); //calls inner function//
        return count;
    }
}