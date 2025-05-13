//RECIPE POP UP MODAL SECTION

//sets up the button that will open the recipe modal
var btns = document.querySelectorAll("input.modal-button");

//defines all modals for each recipe
var modals = document.querySelectorAll(".recipe-modal");

//get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close-btn");

//when the user clicks the recipe button, open the modal
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
        modal = document.querySelector(event.target.getAttribute("href"));
        modal.style.display = "block";
    }
}

//when the user clicks on <span> (x) close the modal
for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        for (var index in modals) {
            if (modals[index].style) {
                modals[index].style.display = "none";
            }
        }
    }
}

//EMAIL VALIDATION

document.getElementById('contactForm').addEventListener('submit', 
    function (event) {
        //overrides the default browser refresh when the submit button is pressed
        event.preventDefault();

        //variables to validate that each field is filled out
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value; 
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        //emaile pattern checks for all symbols that would be needed for an email address, ie. @ and .
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        //use this variable to display messages if fields are filled out or thank you message
        const valMsg = document.getElementById('validateMsg');

        if (!firstName || !lastName || !phone || !message) {
            //checks if fields have been filled out
            valMsg.innerHTML = '<p style="color: red;">Please fill out all empty fields</p>'        
        } else if (!emailPattern.test(email)) {
            //checks if there is a valid email
            valMsg.innerHTML = '<p style="color: red;">Please enter a valid email address</p>'
        } else { 
            //if all fields are filled out correctly display thank you msg
            valMsg.innerHTML = '<p style="color: red;">Thank you for submitting!</p>'
        }

        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message,
            subscribe: document.getElementById('subscription').checked
        };

        //displays what the user wrote in the console
        console.log(JSON.stringify(formData))
    } 
)