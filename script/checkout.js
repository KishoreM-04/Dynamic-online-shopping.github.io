// LOGIN CHECK
const loggedIn = localStorage.getItem("loggedInUser");
if (!loggedIn) window.location.href = "login.html";

// LOGOUT
document.getElementById("logoutBtn").onclick = () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
};

// LOAD CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const orderItemsDiv = document.getElementById("orderItems");
const totalAmountEl = document.getElementById("totalAmount");

// RENDER ORDER SUMMARY
function loadOrderSummary() {
    orderItemsDiv.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        orderItemsDiv.innerHTML = `<p class="text-muted">Your cart is empty</p>`;
        totalAmountEl.textContent = "₹0";
        return;
    }

    cart.forEach(item => {
        total += item.qty * item.price;

        orderItemsDiv.innerHTML += `
            <div class="order-item d-flex justify-content-between align-items-center">
                <div>
                    <h6>${item.name}</h6>
                    <p class="text-muted small">Qty: ${item.qty}</p>
                </div>
                <div class="order-price">₹${item.price * item.qty}</div>
            </div>
        `;
    });

    totalAmountEl.textContent = "₹" + total;
}

loadOrderSummary();

// PLACE ORDER
document.getElementById("placeOrderBtn").onclick = () => {

    const name = fullName.value.trim();
    const phone = phone.value.trim();
    const email = email.value.trim();
    const addr = address.value.trim();
    const cityVal = city.value.trim();
    const pin = pincode.value.trim();

    if (!name || !phone || !email || !addr || !cityVal || !pin) {
        alert("Please fill all fields");
        return;
    }

    if (cart.length === 0) {
        alert("Cart is empty");
        return;
    }

    alert("Order placed successfully!");

    // CLEAR CART
    localStorage.removeItem("cart");

    window.location.href = "home.html";
};
