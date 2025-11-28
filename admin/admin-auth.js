(function () {
    const loggedIn = localStorage.getItem("loggedInUser");
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u => u.email === loggedIn);

    if (!loggedIn || !user || !user.isAdmin) {
        alert("Admin access required!");
        window.location.href = "../pages/login.html";
    }
})();
