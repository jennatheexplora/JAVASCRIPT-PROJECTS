function validateForm() { //write the necessary code to add form validation to a field (or fields)//
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Please Fill All Fields.");
    }
}