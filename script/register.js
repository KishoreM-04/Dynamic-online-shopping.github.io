document.getElementById("register-btn").addEventListener("click", function () {

    // Inputs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const pass = document.getElementById("password").value.trim();
    const pass2 = document.getElementById("password2").value.trim();

    // Error elements
    const errName = document.getElementById("name-error");
    const errEmail = document.getElementById("email-error");
    const errPass = document.getElementById("password-error");
    const errPass2 = document.getElementById("password2-error");

    // Hide all errors
    errName.classList.add("d-none");
    errEmail.classList.add("d-none");
    errPass.classList.add("d-none");
    errPass2.classList.add("d-none");

    // Validation
    if (name.length === 0) {
        errName.classList.remove("d-none");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        errEmail.classList.remove("d-none");
        return;
    }

    if (pass.length < 6) {
        errPass.classList.remove("d-none");
        return;
    }

    if (pass !== pass2) {
        errPass2.classList.remove("d-none");
        return;
    }

    // Fetch users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check duplicate email
    if (users.some(u => u.email === email)) {
        alert("Email already registered");
        return;
    }

    // Create new user
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: pass
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");

    // Redirect to login
    window.location.href = "login.html";
});
