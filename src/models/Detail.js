const mongoose=require("mongoose");

const Details=mongoose.Schema({
    brandName:String,
    brandIconUrl:String,
    link:[{
        label:String,
        url:String
    }]
});



module.exports = mongoose.model("details",Details);