// Find the number of auctions belonging to exactly four categories
// 8363

db.items.count({ Category: { $size: 4 } });

// 8363
