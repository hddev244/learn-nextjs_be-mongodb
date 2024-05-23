learn mongodb

===================== Create db =======================
use <db name>
===================== Create collections =======================
auto create
=====================Insert=======================
db.users.insertOne({username:"locnv",name:"nguyen van loc",address:"danang"})
db.<collection_name>.insertMany([{}])
db.users.insertMany([{
... username: "daivvh244",
... name: "vo van hai dai",
... address: "danang"},
... {username : "longnv",
... name: "Nguyen Van Long",
... address :"hue"}]);

=====================find - query=======================
find all
db.<collection_name>.find({})  ~ db.<collection_name>.find() :
findOne()
return first document found
find with specific equality conditions.
db.<collection_name>.find({<field_name> : <value>}) :
find with operations ($or , $in)
db.<collection_name>.find(<field_name> : {$in : [value1,value2,... ]} )
{ $or: [ { <expression1> }, { <expression2> }, ... , { <expressionN> } ] }
	ex:  db.users.find({ $or: [{username:{$in:["daivvh244"]}},{ address:"hue"}] })
find less than ($lt) - great than ($lt)
db.users.find(age:{$lt:18})  
db.users.find(age:{$lt:18})
db.users.find({username:"minhln",age:{$gt:18}})
use $regex:
 db.users.find({username :{$regex: '^d' }})

=====================Update=======================
db.inventory.updateOne
db.inventory.updateMany(
   { conditions } },
   {
     $set: { "size.uom": "in", status: "P" },
     $currentDate: { lastModified: true }
   }
)
=====================Delete=======================
db.users.deleteOne({ age : {$lt : 16} , username : {$regex:"^q"}})
db.users.deleteMany({ age : {$lt : 16} , username : {$regex:"^q"}})






