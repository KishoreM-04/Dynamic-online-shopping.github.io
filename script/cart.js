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

// UPDATE LOCALSTORAGE
function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// RENDER CART ITEMS
function renderCart() {
    const container = document.getElementById("cartItemsList");
    const subtotalEl = document.getElementById("subtotal");
    const totalEl = document.getElementById("totalAmount");

    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = `<p class="text-center text-muted py-4">Your cart is empty</p>`;
        subtotalEl.textContent = "₹0";
        totalEl.textContent = "₹0";
        return;
    }

    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.qty * item.price;

        container.innerHTML += `
        <div class="cart-item">

            <img src="${item.image}" class="cart-img">

            <div class="item-details flex-fill">
                <h5>${item.name}</h5>
                <p class="text-muted small">Price: ₹${item.price}</p>

                <div class="qty-box mt-2">
                    <button class="qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
                    <span class="qty-number">${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
                </div>
            </div>

            <div class="text-end">
                <p class="item-price mb-2">₹${item.price * item.qty}</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem('${item.id}')">Remove</button>
            </div>

        </div>
        `;
    });

    subtotalEl.textContent = `₹${subtotal}`;
    totalEl.textContent = `₹${subtotal}`; // FREE DELIVERY
}

// CHANGE QUANTITY
function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.qty += delta;

    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
    }

    updateCart();
}

// REMOVE ITEM
function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    updateCart();
}

// CLEAR CART
document.getElementById("clearCartBtn").onclick = () => {
    if (confirm("Clear entire cart?")) {
        cart = [];
        updateCart();
    }
};

// CHECKOUT
document.getElementById("checkoutBtn").onclick = () => {
    if (cart.length === 0) return alert("Cart is empty!");

    alert("Checkout completed successfully!");
    cart = [];
    updateCart();
};

// INITIAL RENDER
renderCart();
