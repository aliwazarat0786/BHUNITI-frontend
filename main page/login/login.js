const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // Citizen Login
    if (username === "citizen" && password === "1234") {
        window.location.href =
            "../../Citizen/citizen_dashboard/citizen_dashboard.html";
    }

    // Revenue Officer Login
    else if (username === "revenue_officer" && password === "1234") {
        window.location.href =
            "../../Revenue Officer/revenue_officer_overview/RO_overview.html";
    }

    // District Officer Login
    else if (username === "district_officer" && password === "1234") {
        window.location.href =
            "../../District Officer/district_officer_overview/DO_overview.html";
    }

    // Invalid Login
    else {
        alert("Invalid username or password");
    }
});