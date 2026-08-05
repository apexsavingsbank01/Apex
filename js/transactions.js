/*=========================================
  Apex Saving Bank - Transactions
=========================================*/
if(localStorage.getItem("isLoggedIn") !== "true"){

    window.location.href = "login.html";

}
document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchTransaction");
    const filterSelect = document.getElementById("filterType");
    const rows = document.querySelectorAll("#transactionTable tr");

    // =============================
    // Search Transactions
    // =============================

    function filterTransactions() {

        const search =
            searchInput.value.toLowerCase();

        const type =
            filterSelect.value;

        rows.forEach(row => {

            const description =
                row.cells[1].textContent.toLowerCase();

            const transactionType =
                row.cells[3].textContent
                    .toLowerCase();

            const matchesSearch =
                description.includes(search);

            const matchesType =
                type === "all" ||
                transactionType.includes(type);

            row.style.display =
                matchesSearch && matchesType
                    ? ""
                    : "none";

        });

    }

    if (searchInput) {

        searchInput.addEventListener(
            "keyup",
            filterTransactions
        );

    }

    if (filterSelect) {

        filterSelect.addEventListener(
            "change",
            filterTransactions
        );

    }

    // =============================
    // Highlight Selected Row
    // =============================

    rows.forEach(row => {

        row.addEventListener("click", () => {

            rows.forEach(r =>
                r.classList.remove("selected")
            );

            row.classList.add("selected");

        });

    });

    // =============================
    // Export Buttons (Demo)
    // =============================

    const exportButtons =
        document.querySelectorAll(".download-btn");

    exportButtons.forEach(button => {

        button.addEventListener("click", () => {

            alert(
                "Export feature is available in the full application."
            );

        });

    });

    // =============================
    // Fade In Animation
    // =============================

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "opacity .5s ease";

        document.body.style.opacity = "1";

    }, 100);

    // =============================
    // Console Message
    // =============================

    console.log(
        "Transactions page ready."
    );

});