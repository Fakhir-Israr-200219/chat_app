const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION_STRING);
const db = mongoose.connection;
db.on('connected',()=>{
    console.log("db connection succesfull")
})

db.on('err',()=>{
    console.log("db connection is faild");
})
module.exports = db;

