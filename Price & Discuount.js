const Price = p => {
    return d => {
        return  p - (p * (d / 100))
    }
};

const OriginalPrice = Price(300); // set price = 300

const discountedPrice = OriginalPrice(10); // apply discount 30%

console.log(discountedPrice); // final price
