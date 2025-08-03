// Add product to cart
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if item already exists
  let existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

// Display cart items
function loadCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cart-items');
  const totalElement = document.getElementById('cart-total');

  cartContainer.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <p><strong>${item.name}</strong></p>
      <p>Price: $${item.price}</p>
      <p>Quantity: ${item.quantity}</p>
      <p>Total: $${itemTotal.toFixed(2)}</p>
      <hr>
    `;
    cartContainer.appendChild(row);
  });

  totalElement.innerText = `Total: $${total.toFixed(2)}`;
}
localStorage.setItem("isLoggedIn", "true");
// Check if user is logged in