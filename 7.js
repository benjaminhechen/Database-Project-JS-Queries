// Find the ID(s) of auction(s) with the highest current price. (tough)
// { "_id" : 18000, "ItemIDs" : { "ItemID" : "1046871451" } }
// Your formatting may vary but the ids should match.

db.items.aggregate({ 
  "$group": {
    "_id": null, 
    "max_Currently": { "$max": "$Currently" } 
  } 
})