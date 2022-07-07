/**
 * 
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // const buyPrice = Math.min(...prices);
    // const newPrices = prices.slice(prices.indexOf(buyPrice));
    // if (newPrices.length < 2) {
    //     return 0;
    // }
    // const sellPrice = Math.max(...newPrices);
    // return sellPrice - buyPrice;

    // let buyPrice = prices[0];
    // prices.forEach(p => {
    //     if (p < buyPrice) {
    //         buyPrice = p;
    //     }
    // })
    let maxProfit = 0;
    // let minPrice = prices[0];
    for(let i = 1; i < prices.length; i++) {
        // minPrice = Math.min(prices[i], minPrice);
        // maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        if (prices[i] > prices[i-1]) {
            maxProfit += prices[i] - prices[i-1];
        }
        // console.log("minPrice -- ", minPrice);
        // console.log("maxProfit -- ", maxProfit);
    }
    return maxProfit;

};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
