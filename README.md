MyShop – Dynamic Online Shopping Website

This project is a fully functional online shopping web application created using HTML, CSS, Bootstrap 5, Material Design elements, JavaScript, and LocalStorage. The system includes a user shopping interface and an admin panel with full product management features.

Explanation of Each Page

Login Page
Used by users and administrators to access the system. Validates email and password. Redirects the admin to the admin dashboard and normal users to the home page.

Registration Page
Allows new users to create an account. Validates email format, password length, and password confirmation. Stores user details inside LocalStorage.

Home Page
Main landing page for logged-in users. Contains a hero banner, category cards, navbar, and redirects users to the shop or category-based product listings.

Shop Page
Displays all available products using dynamic JavaScript rendering. Shows product image, name, description, and price. Includes “Add to Cart” button. Admin users also see Edit and Delete buttons.

Cart Page
Lists all items added to the cart. Allows users to change quantity, remove products, view order summary, and proceed to checkout.

Category Page
Displays items filtered by a specific category such as Electronics, Fashion, or Home Essentials.

Checkout Page
Collects customer details (name, phone number, address) and displays a summary of the order.

Admin Dashboard
Available only for admin users. Shows total product count and recently added products.

Admin Products Page
Shows all products with Edit and Delete options available for admin.

Admin Add Product Page
Allows admin to add new product data including name, price, category, image URL, and description.

Admin Edit Product Page
Loads existing product data based on product ID and allows admin to update the product.

Admin Orders Page
Placeholder for future order management. Currently shows a simple message.

CRUD Operations Explanation

Users:
Create – Registration adds a new user
Read – Login reads existing users
Update – (optional future feature)
Delete – (optional future feature)

Products:
Create – Admin adds products
Read – Shop page loads products
Update – Admin edits product
Delete – Admin deletes product

Cart:
Create – User adds items to cart
Read – Cart page shows items
Update – Quantity update
Delete – Removing an item

Bootstrap Elements Used

Bootstrap 5 components used in this project include:
Navbar
Grid system
Cards
Buttons
Form controls
Containers
Rows and columns
Responsive layout classes
Utility classes like shadows, paddings, margins, and colors

Material Components Used

Google Material Icons
Material-style input fields (rounded fields with focus effects)
Material buttons
Snackbar-style alerts created using JavaScript
Card shadows and elevated UI elements
Floating action button style for key actions (optional)

Login and Registration Workflow Details

Registration Workflow:

User enters name, email, password, and confirm password.

JavaScript validates fields:

Valid email format

Password length at least 6 characters

Passwords must match

System checks if the email already exists in LocalStorage.

New user is added to LocalStorage as a JSON array element.

User is redirected to the login page.

Login Workflow:

User enters email and password.

JavaScript checks LocalStorage for matching user credentials.

If the user is an admin (isAdmin = true), redirect to admin dashboard.

If a normal user, redirect to home page.

Login state is saved in LocalStorage using the key “loggedInUser”.

Admin Authentication:
Every admin page checks LocalStorage to ensure the logged-in account has admin privileges. If not, the user is redirected back to the login page.