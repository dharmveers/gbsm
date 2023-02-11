const mongoose=require("mongoose");

const newsContent = mongoose.Schema({
      class:String,
      content:String
});

module.exports = mongoose.model("newsContent",newsContent);