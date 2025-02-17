// Function to get cart items from local storage
const getCartItems = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
};

// Function to save cart items to local storage
const saveCartItems = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

// Function to add an item to the cart
const addToCart = (item) => {
    const cart = getCartItems();
    cart.push(item);
    saveCartItems(cart);
    updateCartDisplay();
    showNotification(`${item.name} added to cart`);
};

// Function to update the cart display
const updateCartDisplay = () => {
    const cartItems = getCartItems();
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItems.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <p>${item.name} - $${item.price.toFixed(2)}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }
};

// Function to remove an item from the cart
const removeFromCart = (index) => {
    const cart = getCartItems();
    cart.splice(index, 1);
    saveCartItems(cart);
    updateCartDisplay();
};

// Function to show a notification
const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
};

// Initialize cart display on page load
document.addEventListener('DOMContentLoaded', updateCartDisplay);