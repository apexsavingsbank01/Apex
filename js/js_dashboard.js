/*=========================================
  Apex Saving Bank Dashboard
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
      LOGIN PROTECTION
    ==============================*/

    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "login.html";
        return;
    }

    /*==============================
      LOGOUT
    ==============================*/

    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {

        logoutBtn.addEventListener("click", (e) => {

            e.preventDefault();

            const logout = confirm(
                "Are you sure you want to logout?"
            );

            if (logout) {

                localStorage.removeItem("isLoggedIn");

                alert("You have been logged out.");

                window.location.href = "login.html";

            }

        });

    }

    /*==============================
      NOTIFICATION BELL
    ==============================*/

    const notify = document.querySelector(".notify");

    if (notify) {

        notify.addEventListener("click", () => {

            alert(
`Notifications

• Salary deposited successfully.

• Your debit card expires in September 2030.

• Two-factor authentication is active.

• New banking offers are available.`
            );

        });

    }

    /*==============================
      CARD HOVER EFFECT
    ==============================*/

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });

    /*==============================
      QUICK ACTIONS
    ==============================*/

    const actions = document.querySelectorAll(".action");

    actions.forEach(action => {

        action.addEventListener("click", () => {

            console.log(
                action.textContent.trim() + " opened."
            );

        });

    });

    /*==============================
      PAGE FADE-IN
    ==============================*/

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .5s ease";

        document.body.style.opacity = "1";

    }, 100);

    /*==============================
      DEMO SESSION
    ==============================*/

    console.log("Demo account active.");

});