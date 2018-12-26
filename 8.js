// . Insert a new item/auction with _id "88888888" and zero (0) bids. This auction/item must have a name
// and two categories. (Name and Categories values can be arbitrary)
// WriteResult({ "nInserted" : 1 })

db.items.insertOne({ "_id":"88888888", "Name":"Inserted Item for Q8",  "Category": ["Collectibles", "Housewares"]})