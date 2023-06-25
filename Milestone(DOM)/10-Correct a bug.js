// 10) Correct a bug

let cart = [1, 5, 8, 9, 6];

function doubleCart(cart) {
    for (let i = 0; i < cart.length; i++) {
        cart[i] *= 2 
    }
    return cart;
}


console.log(doubleCart(cart));
