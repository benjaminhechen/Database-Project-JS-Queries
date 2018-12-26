// (UPDATE) Add a new bid of $1000 to 1678348584. Add 1 to the number of Bids. Other fields in the bid
// are optional.
// WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

db.items.updateOne(
   { _id: "1678348584"},
   {
     $set: { "Number_of_Bids": 1, "Currently": 1000, "First_Bid": 1000}
   }
)

//need to add actual bid to bids sub