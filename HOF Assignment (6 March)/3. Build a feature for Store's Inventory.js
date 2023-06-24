const itemList = {
    item1: 100,
    item2: 200,
    item3: 400,
    item4: 500
}

const exchangeRate = 80;

const convertItems = Object.entries(itemList).map(([item, price]) => {
    const pricePrint = price * exchangeRate
    return {[item]: pricePrint}
})

console.log(convertItems);

// DONE