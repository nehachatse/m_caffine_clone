var cart = document.getElementById('cartCount');

var data = JSON.parse(localStorage.getItem('cart'));
console.log("Len =", data.length, data)
cart.textContent = data.length
