/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let totalSpendByCategory = [];

  for (let i = 0; i < transactions.length; i++) {
    let categoryExists = false;

    // Check if category already exists in totalSpendByCategory
    for (let j = 0; j < totalSpendByCategory.length; j++) {
      if (totalSpendByCategory[j].category === transactions[i].category) {
        categoryExists = true;
        totalSpendByCategory[j].totalSpent += transactions[i].price;
        break;
      }
    }

    // If category does not exist, add it to the totalSpendByCategory array
    if (!categoryExists) {
      totalSpendByCategory.push({
        category: transactions[i].category,
        totalSpent: transactions[i].price,
      });
    }
  }

  return totalSpendByCategory;
}


module.exports = calculateTotalSpentByCategory;
