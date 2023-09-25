// javascript.js

// Function to display a message
function showMessage() {
    alert("Click the image to view the Project!");
}

// Listener triggers the function on page load
document.addEventListener("DOMContentLoaded", showMessage);

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // You can add additional validation here if needed
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const errorElement = document.getElementById("error-message");

    if (name === "" || email === "" || message === "") {
        errorElement.textContent = "Please fill in all fields.";
    } else {
        // Redirect to success.html if all fields are filled
        window.location.href = "success.html";
    }
});