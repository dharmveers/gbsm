const mongoose=require('mongoose');

const Suggestion=mongoose.Schema({
    full_name:String,
    email:String,
    subject:String,
    enquiry:String
});

module.exports = mongoose.model("suggestion",Suggestion);