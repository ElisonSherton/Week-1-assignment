/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  var transaction_map = new Map();
  // Iterate over each and every transaction and accumulate the total in a map 
  transactions.forEach(element => {
    let cat = element.category;
    let price = element.price;

    if (transaction_map.has(cat)){
      val = transaction_map.get(cat)
      transaction_map.set(cat, val + price);
    }
    else {
      transaction_map.set(cat, price);
    }
  });

  // Structure the output in the required manner and return that to the caller
  let spends = [];
  var counter = 0;
  transaction_map.forEach((value, key) => {
    spends[counter] = {"category": key, "totalSpent": value};
    counter += 1;
  })

  return spends;
}

module.exports = calculateTotalSpentByCategory;
