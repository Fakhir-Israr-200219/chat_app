const mongose = require('mongoose');

const user_schema = new mongose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        select:false,
        minlength:8
    },
    profiel_picture:{
        type:String,
        required:false
    },
},{
    timestamps:true
})


module.exports = mongose.model('user',user_schema);

