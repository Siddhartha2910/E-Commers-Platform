let products = [];
        let cart = [];

        // Fetch products from the fake API
        async function fetchProducts() {
            const response = await fetch('https://fakestoreapi.com/products');
            products = await response.json();
            displayProducts(products);
        }

        // Display products
        function displayProducts(products) {
            const productContainer = document.getElementById('product-container');
            productContainer.innerHTML = '';
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title} <br>⭐${product.rating.rate}</h3>
                    <p>Price: ₹${product.price}</p>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                `;
                productContainer.appendChild(productElement);
            });
        }

        // Add product to cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            updateCart();
            showNotification(); // Show the notification when item is added to cart
        }

        // Remove item from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCart();
        }

        // Update cart display
        // Update cart display
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let totalMRP = 0;

    // Calculate Total MRP from the cart
    cart.forEach(item => {
        totalMRP += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-details">
                <h4>${item.title}</h4>
                <p>₹${item.price}</p>
                <div class="quantity-control">
                    <button onclick="decreaseQuantity(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id})">+</button>
                </div>
            </div>
            <button id="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    let platformFee = 10;
    let shippingCharges = 20;
    if (totalMRP === 0) {
        platformFee = 0;
        shippingCharges = 0;
    }

    // Calculate dynamic coupon discount (10% of Total MRP)
    const couponDiscount = (totalMRP * 0.10).toFixed(2); // 10% of Total MRP

    // Calculate total amount
    const totalAmount = (totalMRP - couponDiscount + platformFee + shippingCharges).toFixed(2);

    // Update the HTML content with calculated values
    document.getElementById('plat-fee').innerText = `₹${platformFee.toFixed(2)}`;
    document.getElementById('ship-ch').innerText = `₹${shippingCharges.toFixed(2)}`;
    document.getElementById('total-mrp').innerText = `₹${totalMRP.toFixed(2)}`;
    document.getElementById('coupon-discount').innerText = `₹${couponDiscount}`;
    document.getElementById('total-amount').innerText = `₹${totalAmount}`;
}


        // Increase quantity
        function increaseQuantity(productId) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity++;
                updateCart();
            }
        }

        // Decrease quantity
        function decreaseQuantity(productId) {
            const item = cart.find(item => item.id === productId);
            if (item && item.quantity > 1) {
                item.quantity--;
            } else {
                removeFromCart(productId);
            }
            updateCart();
        }

        // Show notification when an item is added to cart
        function showNotification() {
            const notification = document.getElementById('cart-notification');
            notification.style.display = 'block'; // Show the notification
            setTimeout(() => {
                notification.style.display = 'none'; // Hide it after 3 seconds
            }, 3000);
        }

        // Search functionality
        document.getElementById('search-button').addEventListener('click', () => {
            const searchTerm = document.getElementById('search-input').value.toLowerCase();
            const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm));
            displayProducts(filteredProducts);
        });

        // Fetch and display products when the page loads
        fetchProducts();