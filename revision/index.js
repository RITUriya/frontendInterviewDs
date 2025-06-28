/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let totalProfit = 0;
  for (i = 0; i < prices.length; i++) {
    profit = prices[i + 1] - prices[i];
    if (profit > 0) {
      totalProfit = totalProfit + profit;
    }
  }
};
maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([1, 2, 3, 4, 5]);
