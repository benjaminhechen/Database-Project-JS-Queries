// Compute the average of all First_Bid fields
// 20.185956891255376 (It should be around this range. If you are getting something around $15.xxx you may need to use the new json files provided)

db.items.aggregate({ 
  "$group": {
    "_id": null, 
    "avg_First_Bid": { "$avg": "$First_Bid" } 
  } 
})

// { "_id" : null, "avg_First_Bid" : 20.18954422082245 }
