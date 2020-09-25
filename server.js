const mongodb = require('mongodb')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/users');
// var {user} = require('./database/models/user');
const express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json())



                var user = mongoose.model('user',{
                    username:{
                        type : String ,
                        trim : true
                    }

                })

                                app.post('/users',(req,res)=>{
                                    // var user = new user({
                                    //     username:req.body.username
                                    console.log(req)
                                    })
                                //     user.save().then((doc)=>{
                                //         res.send(doc)
                                //     },(e)=>{
                                //        res.status(404).send(e)
                                //     })
                                // })





                            app.listen(3000,()=>{
                                console.log('this start in port 3000')
                            })