// 15) Calculate the percentage of the discount

const originalPrice = 200;
const discountPrice = 100;

const discountPercantage = (originalPrice, discountPrice) => {
    console.log(Math.round((discountPrice / originalPrice) * 100) + "%");
}

discountPercantage(originalPrice, discountPrice)