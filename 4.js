// Return the id and rating of all the sellers whose rating is higher than 1000 (sorted by rating, id (both
// ascending))
db.items.find({"Seller._Rating": { $gt: 1000 } }, {"Seller._id":1, "Seller._Rating": 1 } ).sort({"Seller._Rating":1});
