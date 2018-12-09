function validateForm() {
    let result = true;

    let numInput = document.getElementById("num-input");
    let numErr = document.getElementById("num-err");
    if (!validateNumber(numInput.value.trim())) {
        numErr.innerHTML = "Enter a valid number";
        numInput.style.border = "1px solid red";
        result = false;
    } else {
        numErr.innerHTML = null;
        numInput.style.border = null;
    }
    let emailInput = document.getElementById("email-input");
    let emailErr = document.getElementById("email-err");
    if (!validateEmail(emailInput.value.trim())) {
        emailErr.innerHTML = "Enter a valid email";
        emailInput.style.border = "1px solid red";
        result = false;
    } else {
        emailErr.innerHTML = null;
        emailInput.style.border = null;
    }
    return result;
}

function validateNumber(number) {
    if (!number || isNaN(number)) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    if (!email || !/[\w\d]{5,}@[\w\d]{3,}\.(com|ru|ua|pl)/.test(email)) {
        return false;
    }
    return true;
}