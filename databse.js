const {MongoClient} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/first",(err,client)=>{
    if (err){
        return console.log('Error one ! ')
    }
    const db = client.db('first');
    db.collection('database').insertOne({
        name : "mehrshad" ,
        lstname: "mohammadi",
        city : "kerman",
        completed : false

    },(err,result)=>{
        if (err){
             return console.log('Error tow ! ',err)
        }
        console.log(JSON.stringify(result.ops,undefined,2))

    })
client.close();
})