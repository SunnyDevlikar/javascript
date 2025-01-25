const citiesByState = {
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
    "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"],
    "Andhra Pradesh": ["Vijayawada", "Visakhapatnam", "Guntur", "Nellore", "Kurnool"],
    "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Kota", "Ajmer"]
};

function populateCities() {
    const state = document.getElementById('state').value;
    const citySelect = document.getElementById('city');
    citySelect.innerHTML = '<option value="Select">Select</option>';

    if (citiesByState[state]) {
        citiesByState[state].forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
}

function validateForm() {
    let isValid = true;

    // Full Name Validation
    const fname = document.forms["myForm"]["fname"].value;
    const fnameError = document.getElementById('fname-error');
    if (fname.trim() === "" || fname.length < 3) {
        fnameError.textContent = "Full name must be at least 3 characters long.";
        isValid = false;
    } else {
        fnameError.textContent = "";
    }

    // Date of Birth Validation
    const birth = document.forms["myForm"]["birthday"].value;
    const birthError = document.getElementById('birth-error');
    if (birth === "") {
        birthError.textContent = "Date of Birth is required.";
        isValid = false;
    } else {
        birthError.textContent = "";
    }

    // Gender Validation
    const gender = document.forms["myForm"]["Gender"];
    const genderError = document.getElementById('gender-error');
    if (![...gender].some(radio => radio.checked)) {
        genderError.textContent = "Please select your gender.";
        isValid = false;
    } else {
        genderError.textContent = "";
    }

    // Email Validation
    const email = document.forms["myForm"]["email"].value;
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Password Validation
    const password = document.forms["myForm"]["psw"].value;
    const passwordError = document.getElementById('password-error');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters long, include uppercase, lowercase, number, and special character.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Re-Password Validation
    const repassword = document.forms["myForm"]["repsw"].value;
    const repasswordError = document.getElementById('repassword-error');
    if (repassword !== password) {
        repasswordError.textContent = "Passwords do not match.";
        isValid = false;
    } else {
        repasswordError.textContent = "";
    }

    // State Validation
    const state = document.forms["myForm"]["state"].value;
    const stateError = document.getElementById('state-error');
    if (state === "Select") {
        stateError.textContent = "Please select a state.";
        isValid = false;
    } else {
        stateError.textContent = "";
    }

    // City Validation
    const city = document.forms["myForm"]["city"].value;
    const cityError = document.getElementById('city-error');
    if (city === "Select") {
        cityError.textContent = "Please select a city.";
        isValid = false;
    } else {
        cityError.textContent = "";
    }

    if (isValid) {
        alert("Form Submitted Successfully");
    }

    return isValid;
}