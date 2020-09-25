//pls send to 5 data to database and read 1 to data base and update 1 data in database and 1 data update in database whit MONGOOSE
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/use');

    var user = mongoose.model('copyUser',{
        username: {
            type: String,
            required : true,
            trim:true

        },
        password: {
            type: String ,
            required : true,

        },
        emile: {
            type: String,
            required : true,
            trim:true

        }

    })

    var answer = new user({
        username: "Mehrshad",
        password: "123456",
        emile: "mehrshaddost@gmail.com"
    })


    answer.save().then((doc)=>{
        console.log("GOOD... DATA IS SHAERED +_+ ",doc)
    },(error)=>{
        console.log("EROOR FOR NOT SAVING ...",error)
    })