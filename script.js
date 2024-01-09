const forms = document.querySelector(".forms");

const pwShowHide = document.querySelectorAll(".eye-icon");

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwField = eyeIcon.previousElementSibling;

        if (pwField.type === "password") {
            pwField.type = "text";
            eyeIcon.classList.replace("bx-hide", "bx-show");
        } else {
            pwField.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        }
    });
});

const links = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        forms.classList.toggle("show-signup");
    });
});

const loginButton = document.querySelector('.form.login button');

loginButton.addEventListener('click', () => {
    const loginEmailField = document.querySelector('.form.login .input');
    const loginPasswordField = document.querySelector('.form.login .password');

    if (loginEmailField.value.trim() === '' || loginPasswordField.value.trim() === '' || !isValidEmail(loginEmailField.value.trim())) {
        alert('Please fill in both email and password fields correctly.');
    } else {
        alert('Login Successful');
    }
});

const signupButton = document.querySelector('.form.signup button');
const signupPasswordField = document.querySelector('.form.signup .password');
const signupConfirmPasswordField = document.querySelector('.form.signup .confirm-password');

signupButton.addEventListener('click', () => {
    const signupEmailField = document.querySelector('.form.signup .input');

    if (signupEmailField.value.trim() === '' || signupPasswordField.value.trim() === '' || signupConfirmPasswordField.value.trim() === '' || !isValidEmail(signupEmailField.value.trim())) {
        alert('Please fill in all fields for signup correctly.');
    } else {
        alert('Signup Successful');
    }
});
