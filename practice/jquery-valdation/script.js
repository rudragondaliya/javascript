
$(document).ready(function () {
    $("#myForm").submit(function (event) {
        let isValid = true;

        // Validate Name
        let name = $("#name").val().trim();
        if (name.length < 3) {
            alert("Name must be at least 3 characters long");
            isValid = false;
        }

        // Validate Email
        let email = $("#email").val().trim();
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address");
            isValid = false;
        }

        // Validate Password
        let password = $("#password").val().trim();
        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});

