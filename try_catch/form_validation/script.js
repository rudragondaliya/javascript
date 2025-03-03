// Get references to the email and password input fields and the form element
let email = document.getElementById('email');
let password = document.getElementById('password')
let form = document.getElementById('form');

// Set focus to the email input field when the page loads
email.focus();

// Add an event listener for the form's submit event
form.addEventListener('submit', function(event){
    event.preventDefault();

  

try{
    // Check if the entered email and password match the expected values
    if(email.value != "Rudra@gmail.com" || password.value != "Rudra@123"){
        throw new Error("Invalid Email or Password!..");
    }
    // If the credentials are valid, show a success message
    alert("Signup Successfully!...")

    // Clear the input fields after successful signup
     email.value = '';
     password.value = '';

     // Set focus back to the email input field
     email.focus();
}
    catch(error){
        // If an error is caught (invalid credentials), show an error message
        alert("Invalid Email or Password");

        // Clear the input fields after successful signup
         email.value = '';
         password.value= '';

        // Set focus back to the email input field
         email.focus();
    }

});