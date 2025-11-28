// Check login
const loggedIn = localStorage.getItem("loggedInUser");
if (!loggedIn) {
    window.location.href = "login.html";
}

// Load users
const users = JSON.parse(localStorage.getItem("users")) || [];
const current = users.find(u => u.email === loggedIn);

// Show admin link
if (current && current.isAdmin) {
    document.getElementById("addProductLink").classList.remove("d-none");
}

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
});
