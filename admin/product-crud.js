function getProducts() {
    return JSON.parse(localStorage.getItem("products")) || [];
}

function saveProducts(arr) {
    localStorage.setItem("products", JSON.stringify(arr));
}

function deleteProduct(id) {
    let products = getProducts().filter(p => p.id !== id);
    saveProducts(products);
    alert("Product deleted");
    location.reload();
}
