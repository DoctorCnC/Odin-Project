// Get all form inputs and error message elements
const form = document.getElementById('registrationForm');
const emailInput = document.getElementById('email');
const countryInput = document.getElementById('country');
const zipInput = document.getElementById('zip');
const passwordInput = document.getElementById('password');
const passwordConfirmInput = document.getElementById('passwordConfirm');

const emailError = document.getElementById('emailError');
const countryError = document.getElementById('countryError');
const zipError = document.getElementById('zipError');
const passwordError = document.getElementById('passwordError');
const passwordConfirmError = document.getElementById('passwordConfirmError');

// Function to show error message for a specific input field
function showError(inputElement, errorElement, message) {
    inputElement.classList.add('invalid');
    errorElement.textContent = message;
}

// Function to remove error message for a specific input field
function removeError(inputElement, errorElement) {
    inputElement.classList.remove('invalid');
    errorElement.textContent = '';
}

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate password and password confirmation match
function validatePasswordMatch(password, passwordConfirm) {
    return password === passwordConfirm;
}

// Event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Perform final validation before submission
    const isValid = validateForm();
    
    if (isValid) {
        // Form submission logic here (e.g., display "high five" message)
        alert("High five! Form submitted successfully!");
    }
});

// Event listeners for form inputs to perform live inline validation
emailInput.addEventListener('input', () => {
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, emailError, 'Invalid email format');
    } else {
        removeError(emailInput, emailError);
    }
});

countryInput.addEventListener('input', () => {
    if (countryInput.value.trim() === '') {
        showError(countryInput, countryError, 'Country cannot be empty');
    } else {
        removeError(countryInput, countryError);
    }
});

zipInput.addEventListener('input', () => {
    if (zipInput.value.trim() === '') {
        showError(zipInput, zipError, 'Zip code cannot be empty');
    } else {
        removeError(zipInput, zipError);
    }
});

passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 6) {
        showError(passwordInput, passwordError, 'Password must be at least 6 characters');
    } else {
        removeError(passwordInput, passwordError);
    }
});

passwordConfirmInput.addEventListener('input', () => {
    if (!validatePasswordMatch(passwordInput.value, passwordConfirmInput.value)) {
        showError(passwordConfirmInput, passwordConfirmError, 'Passwords do not match');
    } else {
        removeError(passwordConfirmInput, passwordConfirmError);
    }
});

// Function to validate the entire form before submission
function validateForm() {
    let isValid = true;
    
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, emailError, 'Invalid email format');
        isValid = false;
    }
    
    if (countryInput.value.trim() === '') {
        showError(countryInput, countryError, 'Country cannot be empty');
        isValid = false;
    }
    
    if (zipInput.value.trim() === '') {
        showError(zipInput, zipError, 'Zip code cannot be empty');
        isValid = false;
    }
    
    if (passwordInput.value.length < 6) {
        showError(passwordInput, passwordError, 'Password must be at least 6 characters');
        isValid = false;
    }
    
    if (!validatePasswordMatch(passwordInput.value, passwordConfirmInput.value)) {
        showError(passwordConfirmInput, passwordConfirmError, 'Passwords do not match');
        isValid = false;
    }
    
    return isValid;
}
