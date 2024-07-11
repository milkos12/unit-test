// Function to calculate the discount
const calculateDiscount = (price, discountPercentage) => {
    return (price * discountPercentage) / 100;
};

// Main function to calculate the final price after discount
const calculateFinalPrice = (price, discountPercentage) => {
    const validation = typeof price == 'number' && typeof discountPercentage == 'number'
    if (validation) {
        const discount = calculateDiscount(price, discountPercentage);
        return price - discount;
    } else {
        return "entries no valid"
    }


};


module.exports = { calculateFinalPrice: calculateFinalPrice, calculateDiscount: calculateDiscount };