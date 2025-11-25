// // Selecting DOM elements
let passwordInput = document.querySelector('#password');
let strengthText = document.querySelector('#strengthValue');
let strengthBar = document.querySelector('#bar');
let btnShow = document.querySelector('#btn-show');
let btnClear = document.querySelector('#btn-clear');

// // Password input listener
passwordInput.addEventListener('input', () => {
    checkStrength(passwordInput.value);
});

// // Show / Hide password
btnShow.addEventListener('click', () => {
    // // Toggle password visibility
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    btnShow.innerText = passwordInput.type === "password" ? "Show" : "Hide";
});

// // Clear password field
btnClear.addEventListener('click', () => {
    passwordInput.value = "";
    strengthText.innerHTML = "None";
    strengthBar.style.width = "0%";
});

// // Function to check password strength
function checkStrength(password) {

    // // Conditions for scoring
    let strength = 0;

    // // Length check
    if (password.length >= 6) strength++;

    // // Contains lowercase
    if (/[a-z]/.test(password)) strength++;

    // // Contains uppercase
    if (/[A-Z]/.test(password)) strength++;

    // // Contains numbers
    if (/[0-9]/.test(password)) strength++;

    // // Contains special characters
    if (/[\W_]/.test(password)) strength++;

    // // Update UI based on strength
    updateStrengthUI(strength);
}

// // Update strength bar + text
function updateStrengthUI(score) {

    if (score === 0) {
        strengthText.innerHTML = "None";
        strengthBar.style.width = "0%";
    }

    if (score === 1) {
        strengthText.innerHTML = "Very Weak";
        strengthBar.style.width = "20%";
    }

    if (score === 2) {
        strengthText.innerHTML = "Weak";
        strengthBar.style.width = "40%";
    }

    if (score === 3) {
        strengthText.innerHTML = "Medium";
        strengthBar.style.width = "60%";
    }

    if (score === 4) {
        strengthText.innerHTML = "Strong";
        strengthBar.style.width = "80%";
    }

    if (score === 5) {
        strengthText.innerHTML = "Very Strong";
        strengthBar.style.width = "100%";
    }
}
