// LOGIN CHECK
const loggedIn = localStorage.getItem("loggedInUser");
if (!loggedIn) window.location.href = "login.html";

// LOAD USERS + CHECK ADMIN
const users = JSON.parse(localStorage.getItem("users")) || [];
const currentUser = users.find(u => u.email === loggedIn);

// SHOW ADD PRODUCT FOR ADMIN
if (currentUser?.isAdmin) {
    document.getElementById("addProductLink").classList.remove("d-none");
}

// LOGOUT
document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
});

// SEED PRODUCTS (only once)
function seedProducts() {
    if (localStorage.getItem("products")) return;

    const defaultProducts = [
        {
            id: "p1",
            name: "Wireless Headphones",
            price: 2499,
            description: "High bass, noise cancellation, wireless.",
            image: "https://images.unsplash.com/photo-1518444024082-2f1d0f7e3f14"
        },
        {
            id: "p2",
            name: "Smartwatch Pro",
            price: 3999,
            description: "Tracks fitness, notifications, calls.",
            image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
        },
        {
            id: "p3",
            name: "Gaming Keyboard",
            price: 1999,
            description: "RGB backlight, mechanical switches.",
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
        },
        {
            id: "p4",
            name: "Sports Sneakers",
            price: 1699,
            description: "Breathable lightweight running shoes.",
            image: "https://images.unsplash.com/photo-1528701800489-20be3c05c0d8"
        },
        {
            id: "p5",
            name: "Ceramic Mug",
            price: 299,
            description: "Minimal matte-finish coffee mug.",
            image: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5"
        },
        {
            id: "p6",
            name: "Table Lamp",
            price: 1490,
            description: "Warm ambience wooden lamp.",
            image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36"
        }
    ];

    localStorage.setItem("products", JSON.stringify(defaultProducts));
}

seedProducts();

// LOAD PRODUCTS
let products = JSON.parse(localStorage.getItem("products")) || [];

// RENDER PRODUCTS
function loadProducts() {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    products.forEach(p => {
        grid.innerHTML += `
        <div class="col-md-4">
            <div class="product-card">

                <img src="${p.image}" alt="${p.name}" class="product-img">

                <div class="product-body">
                    <h5 class="product-title">${p.name}</h5>
                    <p class="product-desc">${p.description}</p>

                    <div class="d-flex justify-content-between align-items-center">
                        <span class="price">₹${p.price}</span>
                        <button class="btn btn-primary btn-sm" onclick="addToCart('${p.id}')">Add to Cart</button>
                    </div>

                    ${currentUser?.isAdmin ? `
                    <div class="d-flex gap-2 mt-3">
                        <button class="btn btn-outline-secondary admin-btn" onclick="editProduct('${p.id}')">Edit</button>
                        <button class="btn btn-outline-danger admin-btn" onclick="deleteProduct('${p.id}')">Delete</button>
                    </div>` : ""}
                </div>

            </div>
        </div>`;
    });
}

loadProducts();

// ADD TO CART
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existing = cart.find(item => item.id === id);
    const product = products.find(p => p.id === id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            id: id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart!");
}

// EDIT PRODUCT
function editProduct(id) {
    localStorage.setItem("editProductId", id);
    window.location.href = "edit-product.html";
}

// DELETE PRODUCT
function deleteProduct(id) {
    if (!confirm("Delete this product?")) return;

    const updated = products.filter(p => p.id !== id);
    localStorage.setItem("products", JSON.stringify(updated));

    window.location.reload();
}
