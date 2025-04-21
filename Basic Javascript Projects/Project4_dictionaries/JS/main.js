function myDictionary() { //creates dictionary//
    var Food = { 
        Pasta: "Vodka", //assigns key-value pairs//
        Taco: "Birria",
        Pizza: "Supreme",
        Seafood: "Shrimp",
        Dessert: "Brownie"
    };
    delete Food.Dessert; //deletes this kvp before displaying them, resulting in "undefined" displayed on the page//
    document.getElementById("Dictionary").innerHTML = Food.Dessert; //if not deleted, would display the result of the kvp on the page//
}
