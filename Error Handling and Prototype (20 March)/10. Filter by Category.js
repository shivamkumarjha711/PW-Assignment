let products = [
    {name: 'Shirt', category: 'Clothing'},
    {name: 'Pants', category: 'Clothing'},
    {name: 'Hat', category: 'Accessories'},
    {name: 'Sunglasses', category: 'Accessories'}
]

function clothingsProducts(products) {
    return function (category) {
        return products.filter(ele => ele.category === category)
    }
}

console.log(clothingsProducts(products)('Clothing'));

