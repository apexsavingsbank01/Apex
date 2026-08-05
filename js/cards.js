/*=========================================
  Apex Saving Bank - Cards Page
=========================================*/
if(localStorage.getItem("isLoggedIn") !== "true"){

    window.location.href = "login.html";

}
document.addEventListener("DOMContentLoaded", () => {

    const freezeBtn = document.getElementById("freezeCard");
    const replaceBtn = document.getElementById("replaceCard");
    const pinBtn = document.getElementById("changePin");
    const limitsBtn = document.getElementById("viewLimits");

    let frozen = false;

    // =============================
    // Freeze / Unfreeze Card
    // =============================

    if (freezeBtn) {

        freezeBtn.addEventListener("click", () => {

            frozen = !frozen;

            if (frozen) {

                freezeBtn.innerHTML =
                    '<i class="fa-solid fa-lock"></i><br>Unfreeze Card';

                alert("Your card has been frozen. (Demo)");

            } else {

                freezeBtn.innerHTML =
                    '<i class="fa-solid fa-snowflake"></i><br>Freeze Card';

                alert("Your card has been unfrozen. (Demo)");

            }

        });

    }

    // =============================
    // Replace Card
    // =============================

    if (replaceBtn) {

        replaceBtn.addEventListener("click", () => {

            if (confirm("Request a replacement card? (Demo)")) {

                alert("Replacement card request submitted.");

            }

        });

    }

    // =============================
    // Change PIN
    // =============================

    if (pinBtn) {

        pinBtn.addEventListener("click", () => {

            const pin = prompt("Enter a new 4-digit PIN:");

            if (pin === null) return;

            if (/^\d{4}$/.test(pin)) {

                alert("PIN changed successfully. (Demo)");

            } else {

                alert("PIN must contain exactly 4 digits.");

            }

        });

    }

    // =============================
    // View Limits
    // =============================

    if (limitsBtn) {

        limitsBtn.addEventListener("click", () => {

            alert(
`Daily Card Limits

ATM Withdrawal: $2,000

Online Purchases: $5,000

POS Transactions: $10,000

International Payments: Enabled`
            );

        });

    }

    // =============================
    // Highlight Activity Rows
    // =============================

    const rows = document.querySelectorAll(".activity-section tbody tr");

    rows.forEach(row => {

        row.addEventListener("click", () => {

            rows.forEach(r => r.classList.remove("selected"));

            row.classList.add("selected");

        });

    });

    // =============================
    // Card Hover Animation
    // =============================

    const cards = document.querySelectorAll(".bank-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px) scale(1.02)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

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

    console.log("Cards page ready.");

});