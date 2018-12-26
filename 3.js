// Find the number of items from Canada (Country)
// 716

db.items.distinct("_id",{Country: "Canada"}).length;

// 716

