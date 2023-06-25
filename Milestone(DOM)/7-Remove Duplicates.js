// 7) Remove Duplicates

const cartItem = ["copy", "pen", "pencil", "eraser", "pen", "eraser"]


function filterCart(cart) {
    const UniqueCart = [];

    for(let i = 0; i < cart.length; i++) {
        var item = cart[i];

        if (!UniqueCart.includes(item)) {

            UniqueCart.push(item)
        }
    }
    return UniqueCart;
}

console.log(filterCart(cartItem));
