function displayType(dessert){
    var dessertType = dessert.getAttribute("data-dessert-type");
    alert(dessertType + " is in the " + dessert.innerHTML + " category.");
}