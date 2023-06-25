// 14) Calculate the final order price

const cart = [
    {unitPrice: 100, quantity: 2},
    {unitPrice: 200, quantity: 4},
    {unitPrice: 300, quantity: 5}
]

const calculateTotalCost = (cart) => {
    let totalCost = 0;
    cart.forEach(item => {
        totalCost += item.unitPrice * item.quantity
    });
    return totalCost;
}

console.log(calculateTotalCost(cart));