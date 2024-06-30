// script.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather the form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Simulate form submission to server
    // You can replace this with actual form submission using fetch() or XMLHttpRequest()
    console.log('User registered:', { username, email, password, confirmPassword });

    // Redirect to the main webpage after successful registration
    if (password !== confirmPassword) {
        document.querySelector('.error').textContent = "Password do not Match. kindly confirm and try agai!!";

    }
    if (password.length < 6) {
        document.querySelector('.error').textContent = 'Password must be at least 6 characters long!';
         // Prevent form submission
    }

    else if (password === confirmPassword && password.length>=6) {
    window.location.href = 'practice.html'; // Replace 'main.html' with the actual URL of your main webpage
}});