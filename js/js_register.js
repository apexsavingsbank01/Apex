/*=========================================
  Apex Saving Bank - Register
=========================================*/
if(localStorage.getItem("isLoggedIn") !== "true"){

    window.location.href = "login.html";

}
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registerForm");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const registerButton = document.querySelector(".register-btn");

    // =============================
    // Password Strength Indicator
    // =============================

    const strengthText = document.createElement("small");
    strengthText.style.display = "block";
    strengthText.style.marginTop = "8px";
    strengthText.style.fontWeight = "600";

    if (password) {
        password.parentNode.appendChild(strengthText);

        password.addEventListener("input", () => {

            const value = password.value;

            let score = 0;

            if (value.length >= 8) score++;
            if (/[A-Z]/.test(value)) score++;
            if (/[a-z]/.test(value)) score++;
            if (/[0-9]/.test(value)) score++;
            if (/[^A-Za-z0-9]/.test(value)) score++;

            if (value.length === 0) {

                strengthText.textContent = "";

            } else if (score <= 2) {

                strengthText.textContent = "Weak password";
                strengthText.style.color = "#ff4d4d";

            } else if (score <= 4) {

                strengthText.textContent = "Medium password";
                strengthText.style.color = "#ffc107";

            } else {

                strengthText.textContent = "Strong password";
                strengthText.style.color = "#28c76f";

            }

        });
    }

    // =============================
    // Form Validation
    // =============================

    if (form) {

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            if (password.value !== confirmPassword.value) {

                alert("Passwords do not match.");

                confirmPassword.focus();

                return;

            }

            if (password.value.length < 8) {

                alert("Password must be at least 8 characters.");

                password.focus();

                return;

            }

            registerButton.disabled = true;

            registerButton.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Creating Account...';

            // Demo only
            setTimeout(() => {

                alert("Account created successfully! (Demo)");

                window.location.href = "login.html";

            }, 2000);

        });

    }

    // =============================
    // Auto Focus
    // =============================

    const firstInput = document.querySelector("input[name='firstName']");

    if (firstInput) {
        firstInput.focus();
    }

    // =============================
    // Fade In
    // =============================

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .6s ease";
        document.body.style.opacity = "1";

    }, 100);

    console.log("Register page ready.");

});