(function () {

    const sidebarHTML = `
        <aside class="admin-sidebar" id="adminSidebar">
            <div class="sidebar-brand">
                <span class="material-icons logo">dashboard</span>
                <span class="brand-text">Admin Panel</span>
                <button id="collapseSidebar" class="collapse-btn">
                    <span class="material-icons">chevron_left</span>
                </button>
            </div>

            <nav class="sidebar-menu">
                <a href="dashboard.html" class="menu-item" id="navDashboard">
                    <span class="material-icons">home</span> <span>Dashboard</span>
                </a>
                <a href="products.html" class="menu-item" id="navProducts">
                    <span class="material-icons">inventory_2</span> <span>Products</span>
                </a>
                <a href="add-product.html" class="menu-item" id="navAddProduct">
                    <span class="material-icons">add_box</span> <span>Add Product</span>
                </a>
                <a href="orders.html" class="menu-item" id="navOrders">
                    <span class="material-icons">receipt_long</span> <span>Orders</span>
                </a>
            </nav>

            <button class="logout-btn" id="adminLogout">
                <span class="material-icons">logout</span> Logout
            </button>
        </aside>
    `;

    document.body.insertAdjacentHTML("afterbegin", sidebarHTML);

    document.getElementById("collapseSidebar").addEventListener("click", () => {
        document.getElementById("adminSidebar").classList.toggle("collapsed");
    });

    document.getElementById("adminLogout").addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        window.location.href = "../index.html";
    });

})();
