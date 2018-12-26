// Find the number of bidders in the database
// 7010

db.items.distinct("Bids.Bid.Bidder").length;

// 7010 
// shows 7009 because removed a record