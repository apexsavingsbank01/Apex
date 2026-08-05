/*=========================================
  Apex Saving Bank - Transfer Page
=========================================*/
if(localStorage.getItem("isLoggedIn") !== "true"){

    window.location.href = "login.html";

}
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("transferForm");
    const submitButton = document.querySelector(".transfer-btn");

    const recipientInput =
        document.querySelector('input[placeholder="Enter recipient name"]');

    const bankInput =
        document.querySelector('input[placeholder="Enter bank name"]');

    const accountInput =
        document.querySelector('input[placeholder="Enter account number"]');

    const amountInput =
        document.querySelector('input[type="number"]');

    // =============================
    // Auto Focus
    // =============================

    if (recipientInput) {
        recipientInput.focus();
    }

    // =============================
    // Account Number Validation
    // =============================

    if (accountInput) {

        accountInput.addEventListener("input", () => {

            accountInput.value =
                accountInput.value.replace(/\D/g, "");

        });

    }

    // =============================
    // Form Submission
    // =============================

    if (form) {

        form.addEventListener("submit", function(e) {

            e.preventDefault();

            const recipient =
                recipientInput.value.trim();

            const bank =
                bankInput.value.trim();

            const account =
                accountInput.value.trim();

            const amount =
                parseFloat(amountInput.value);

            if (recipient === "") {

                alert("Please enter the recipient's name.");

                recipientInput.focus();

                return;

            }

            if (bank === "") {

                alert("Please enter the recipient's bank.");

                bankInput.focus();

                return;

            }

            if (account.length !== 10) {

                alert("Account number must contain exactly 10 digits.");

                accountInput.focus();

                return;

            }

            if (isNaN(amount) || amount <= 0) {

                alert("Please enter a valid transfer amount.");

                amountInput.focus();

                return;

            }

            submitButton.disabled = true;

            submitButton.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Processing Transfer...';

            // Demo Only
            setTimeout(() => {

                alert(
                    "Transfer submitted successfully! (Demo)"
                );

                window.location.href = "dashboard.html";

            }, 2000);

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

    console.log("Transfer page ready.");

});