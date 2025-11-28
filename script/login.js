// Seed admin if not exists
(function seedAdmin() {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (!users.some(u => u.email === "admin@gmail.com")) {
        users.push({
            id: "admin1",
            name: "Admin",
            email: "admin@gmail.com",
            password: "admin123",
            isAdmin: true
        });

        localStorage.setItem("users", JSON.stringify(users));
    }
})();

// Login handler
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        alert("Invalid email or password");
        return;
    }

    // Store logged-in user
    localStorage.setItem("loggedInUser", user.email);

    // Admin redirect
    if (user.isAdmin) {
        window.location.href = "./admin/dashboard.html";  
        return;
    }

    // Normal user redirect
    window.location.href = "./html/home.html";
});
