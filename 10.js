// Delete all the auction documents where seller rating is less than zero (0)
// WriteResult({ "nRemoved" : 5 }

db.items.deleteMany({ "Seller._Rating": {$lt: 0 }});

// { "acknowledged" : true, "deletedCount" : 5 }
