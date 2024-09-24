
# E-Commerce Platform

This is a basic e-commerce website that fetches products from a fake API, allows users to search for products, and add items to their cart. The site is responsive and includes functionalities such as product search, cart updates, and price calculation.


## Project-Overview

This project is a demonstration of an e-commerce platform built using HTML, CSS, JavaScript, and Bootstrap. It connects to the Fake Store API to retrieve product information and allows users to search, view, and add products to their cart.
## Tech Stack

**Frontend:**  HTML5, CSS3, JavaScript, Bootstrap

**API:** Fake Store API

**Version Control:** Git


## Features

- Responsive Design: Works across devices (desktops, tablets, and mobile phones).
- Product Listing: Displays products fetched from an API.
- Search Functionality: Users can search for products by name.
- Cart Functionality: Users can add products to their cart, remove them, and update product quantities.
- Price Calculation: Automatically calculates MRP, discounts, platform fees, and total amount.


## Roadmap

1. HTML (index.html):

- This file contains the structure of the website, including the search bar, product display grid, and the cart section.
- When the page loads, it calls the fetchProducts() function from the main.js file to load products from the API.
2. CSS (main.css):

- The styling is done using custom CSS along with Bootstrap for responsiveness.
- Products are displayed in a grid layout, with hover effects and responsive adjustments for various screen sizes.
- A search button is styled to match the provided design, and the 'Add to Cart' button color was customized to the required color from the project specifications.
3. JavaScript (main.js):

- API Interaction: The fetchProducts() function fetches data from the Fake Store API and displays it dynamically in the product container.
- Search Functionality: When users enter a search term, the products are filtered, and only the matching items are displayed.
- Cart Management: Users can add items to the cart, adjust quantities, and remove items. The total price, discounts, and additional fees are automatically calculated.
- Notification: A notification appears briefly when an item is added to the cart.
4. Bootstrap:

- Used for grid layouts to ensure the platform is responsive across various screen sizes.
- Media queries are used in the CSS to adjust the layout for mobile views.



## Usage

1. Search Products:

- Use the search bar to find products by name. The product list will be filtered as you search.
2. Add to Cart:

- Click the "Add to Cart" button on any product to add it to the cart.
- Adjust quantities using the plus (+) and minus (-) buttons in the cart.
3. Remove from Cart:

- Click the "Remove" button to remove a product from the cart.
4. View Total Price:

- The cart section will display the total MRP, coupon discounts, platform fees, shipping charges, and the final amount.
## Feature Enhancements

**Authentication:** Add user login and registration functionality.

**Checkout Process:** Implement payment gateway integration.

**Database:** Add backend storage for managing product inventory and orders."# E-Commers-Platform" 
