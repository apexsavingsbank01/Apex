/*=========================================
  Apex Saving Bank - Settings Page
=========================================*/
if(localStorage.getItem("isLoggedIn") !== "true"){

    window.location.href = "login.html";

}
document.addEventListener("DOMContentLoaded", () => {

    const themeSelect = document.getElementById("themeSelect");
    const languageSelect = document.getElementById("languageSelect");
    const logoutAllBtn = document.getElementById("logoutAll");
    const deleteAccountBtn = document.getElementById("deleteAccount");
    const removeButtons = document.querySelectorAll(".remove-device");
    const toggles = document.querySelectorAll(".toggle input");

    // =============================
    // Load Saved Theme
    // =============================

    const savedTheme = localStorage.getItem("apexTheme");

    if (savedTheme) {
        themeSelect.value = savedTheme;
        applyTheme(savedTheme);
    }

    function applyTheme(theme) {

        if (theme === "dark") {

            document.body.style.background = "#0f172a";
            document.body.style.color = "#ffffff";

        } else {

            document.body.style.background = "";
            document.body.style.color = "";

        }

    }

    // Theme Change

    if (themeSelect) {

        themeSelect.addEventListener("change", () => {

            const value = themeSelect.value;

            localStorage.setItem("apexTheme", value);

            applyTheme(value);

        });

    }

    // =============================
    // Language Selection (Demo)
    // =============================

    if (languageSelect) {

        languageSelect.addEventListener("change", () => {

            alert(
                "Language changed to " +
                languageSelect.value +
                ". (Demo)"
            );

        });

    }

    // =============================
    // Notification Toggles
    // =============================

    toggles.forEach(toggle => {

        toggle.addEventListener("change", () => {

            console.log(
                toggle.parentElement.textContent.trim(),
                toggle.checked
            );

        });

    });

    // =============================
    // Remove Connected Device
    // =============================

    removeButtons.forEach(button => {

        button.addEventListener("click", () => {

            if (confirm("Remove this device from your account?")) {

                button.closest(".device-item").remove();

            }

        });

    });

    // =============================
    // Logout All Devices
    // =============================

    if (logoutAllBtn) {

        logoutAllBtn.addEventListener("click", () => {

            if (confirm("Log out of all devices?")) {

                alert(
                    "All active sessions have been signed out. (Demo)"
                );

            }

        });

    }

    // =============================
    // Delete Account (Demo)
    // =============================

    if (deleteAccountBtn) {

        deleteAccountBtn.addEventListener("click", () => {

            const answer = prompt(
                "Type DELETE to continue:"
            );

            if (answer === "DELETE") {

                alert(
                    "Account deletion request submitted. (Demo)"
                );

            } else {

                alert("Request cancelled.");

            }

        });

    }

    // =============================
    // Page Fade In
    // =============================

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .5s ease";
        document.body.style.opacity = "1";

    }, 100);

    console.log("Settings page ready.");

});