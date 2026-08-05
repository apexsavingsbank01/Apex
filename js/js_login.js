/*=========================================
  Apex Saving Bank - Login JavaScript
=========================================*/

// Password Show / Hide
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", () => {

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        } else {
            passwordInput.type = "password";
            togglePassword.innerHTML = '<i class="fa-solid fa-eye"></i>';
        }

    });
}

// Login Form
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const username =
            document.querySelector('input[type="text"]').value.trim();

        const password =
            passwordInput.value.trim();

        if (username === "") {
            alert("Please enter your username or email.");
            return;
        }

        if (password === "") {
            alert("Please enter your password.");
            return;
        }

        const loginButton =
            document.querySelector(".login-btn");

        loginButton.disabled = true;

        loginButton.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            Signing In...
        `;

        // Demo delay
        setTimeout(() => {

            const DEMO_EMAIL = "demo@apexsavingbank.com";
const DEMO_PASSWORD = "Apex@2026";

if(email === DEMO_EMAIL && password === DEMO_PASSWORD){

    localStorage.setItem("isLoggedIn","true");

    alert("Login Successful!");

    window.location.href = "otp.html";

}else{

    alert("Incorrect email or password.");

}

            window.location.href = "dashboard.html";

        }, 1800);

    });

}

// Auto Focus
window.addEventListener("load", () => {

    const firstInput = document.querySelector('input[type="text"]');

    if (firstInput) {
        firstInput.focus();
    }

});

// Press Enter Anywhere
document.addEventListener("keydown", function(e) {

    if (e.key === "Enter") {

        if (loginForm) {

            loginForm.requestSubmit();

        }

    }

});

// Simple Fade In
window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .6s ease";

        document.body.style.opacity = "1";

    }, 100);

});

// Remember Me (Frontend Demo)
const rememberCheckbox =
    document.querySelector('.options input[type="checkbox"]');

const usernameField =
    document.querySelector('input[type="text"]');

if (rememberCheckbox && usernameField) {

    // Load saved username
    const savedUser = localStorage.getItem("apex_username");

    if (savedUser) {

        usernameField.value = savedUser;

        rememberCheckbox.checked = true;

    }

    loginForm.addEventListener("submit", () => {

        if (rememberCheckbox.checked) {

            localStorage.setItem(
                "apex_username",
                usernameField.value
            );

        } else {

            localStorage.removeItem("apex_username");

        }

    });

}

console.log("Apex Saving Bank Login Ready");