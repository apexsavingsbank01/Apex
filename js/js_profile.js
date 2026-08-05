/*=========================================
  Apex Saving Bank - Profile Page
=========================================*/
if(localStorage.getItem("isLoggedIn") !== "true"){

    window.location.href = "login.html";

}
document.addEventListener("DOMContentLoaded", () => {

    const profileForm = document.getElementById("profileForm");
    const uploadPhotoBtn = document.getElementById("uploadPhoto");
    const changePasswordBtn = document.getElementById("changePassword");
    const enable2FABtn = document.getElementById("enable2FA");
    const saveBtn = document.querySelector(".save-btn");

    let twoFactorEnabled = false;

    // =============================
    // Save Profile (Demo)
    // =============================

    if (profileForm) {

        profileForm.addEventListener("submit", (e) => {

            e.preventDefault();

            saveBtn.disabled = true;

            saveBtn.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Saving Changes...';

            setTimeout(() => {

                alert("Profile updated successfully. (Demo)");

                saveBtn.disabled = false;

                saveBtn.innerHTML = "Save Changes";

            }, 1800);

        });

    }

    // =============================
    // Change Profile Photo (Demo)
    // =============================

    if (uploadPhotoBtn) {

        uploadPhotoBtn.addEventListener("click", () => {

            alert(
                "Photo upload is available in the full application."
            );

        });

    }

    // =============================
    // Change Password (Demo)
    // =============================

    if (changePasswordBtn) {

        changePasswordBtn.addEventListener("click", () => {

            const password = prompt(
                "Enter your new password:"
            );

            if (password === null) return;

            if (password.length < 8) {

                alert(
                    "Password must contain at least 8 characters."
                );

                return;

            }

            alert(
                "Password changed successfully. (Demo)"
            );

        });

    }

    // =============================
    // Two-Factor Authentication
    // =============================

    if (enable2FABtn) {

        enable2FABtn.addEventListener("click", () => {

            twoFactorEnabled = !twoFactorEnabled;

            if (twoFactorEnabled) {

                enable2FABtn.innerHTML =
                    '<i class="fa-solid fa-shield-check"></i> Disable Two-Factor Authentication';

                alert(
                    "Two-Factor Authentication enabled. (Demo)"
                );

            } else {

                enable2FABtn.innerHTML =
                    '<i class="fa-solid fa-shield-halved"></i> Enable Two-Factor Authentication';

                alert(
                    "Two-Factor Authentication disabled. (Demo)"
                );

            }

        });

    }

    // =============================
    // Notification Preferences
    // =============================

    const notificationBoxes =
        document.querySelectorAll(".notifications input");

    notificationBoxes.forEach(box => {

        box.addEventListener("change", () => {

            console.log(
                `${box.parentElement.textContent.trim()} : ${box.checked}`
            );

        });

    });

    // =============================
    // Fade In
    // =============================

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .5s ease";

        document.body.style.opacity = "1";

    }, 100);

    console.log("Profile page ready.");

});