const form = document.getElementById('myForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Basic username validation (minimum 4 characters)
    const username = usernameInput.value;
    if (!/^[a-zA-Z]{4,}$/.test(username)) {
        errorMessage.textContent = "Username must be at least 4 characters long and contain only letters.";
        return;
    }

    // Basic email validation
    const email = emailInput.value;
    const allowedExtensions = ["com", "in"]; // Add the extensions you want to allow
    const emailRegex = new RegExp(`^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\\.(${allowedExtensions.join('|')}))$`, 'i');

    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Please enter a valid email address";
        return;
    }

    // Basic password validation (minimum 6 characters)
    const password = passwordInput.value;
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        return;
    }

    // Check if the password and confirm password match
    const confirmPassword = confirmPasswordInput.value;
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return;
    }

    // If all validations pass, allow the form to submit
    errorMessage.textContent = '';
    form.submit();
});
