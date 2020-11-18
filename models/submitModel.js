const mongoose = require('mongoose')
const Schema = mongoose.Schema

const submitSchema = new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    subject:{type:String,required:true},
    message:{type:String,required:true}
})

const Submit = mongoose.model('Submit',submitSchema)
module.exports = Submit