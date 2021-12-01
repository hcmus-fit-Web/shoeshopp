const mongoose = require("mongoose");


const typeSchema = mongoose.Schema({
    nameType:{
        type:String
    }
})

const Type = mongoose.model('type',typeSchema,'type');
module.exports = Type;