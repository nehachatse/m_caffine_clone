// add cart data to this div
var cartContainer = document.getElementById("cartContainer");
var amount = 0
var cart = document.getElementById('cartCount');
var cartItem = JSON.parse(localStorage.getItem('cart')) || [];
var totalAmount = document.getElementById('totalAmount')
var totalItems = document.getElementById('totalItems');
var billAmount = document.getElementById('billAmount');

var couponBtn = document.getElementById('couponBtn')

function discount() {
    let couponId = document.getElementById('couponId').value
    if(couponId == "masai15"){
        totalAmount = amount - (amount*15/100)
        totalAmount.textContent = totalAmount
        billAmount.textContent = totalAmount
    }
}

window.addEventListener('load', () => displayCart(cartItem))
cart.textContent = cartItem.length

function displayCart(cartData) {
    amount = 0
    let cart_length = cartItem.length;
    totalItems.textContent = "Total items in cart: " + cart_length
    cartContainer.innerHTML = ''
    cartData.map((ele) => {
        console.log("ELE =", ele, cartData)
        amount += ele.discountedPrice
        let product = document.createElement('div');
        let imgDiv = document.createElement('img')
        imgDiv.src = ele.img
        imgDiv.style.width = '100%'
        let name = document.createElement('p');
        name.textContent = ele.name

        let priceDiv = document.createElement('div')
        let disPrice = document.createElement('p')
        let orgPrice = document.createElement('p')
        disPrice.textContent = ele.discountedPrice
        orgPrice.textContent = ele.originalPrice
        priceDiv.appendChild(disPrice)
        priceDiv.appendChild(orgPrice)

        let button = document.createElement('button');
        button.textContent = "Remove from Cart"
        button.onclick = function() {
            cartItem = cartItem.filter((element) => {
                    return element.id !== ele.id;
                });
            localStorage.setItem('cart', JSON.stringify(cartItem))
            cart.textContent = cartItem.length
            displayCart(cartItem)
            totalAmount.textContent = "Total Amount: " + amount
            
        }
        product.appendChild(imgDiv);
        product.appendChild(name)
        product.appendChild(priceDiv)
        product.appendChild(button)

        cartContainer.appendChild(product)
    })
    totalAmount.textContent = "Total Amount: " + amount
    billAmount.textContent = "Bill Amount: " + amount

    return amount;

}


