function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Retrieve the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Clear the previous content
    cartItemsElement.innerHTML = '';

    // Display each item in the cart
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
    });

    // Calculate and display the total price
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
}
