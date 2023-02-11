const mongoose=require('mongoose');

const Gallery=mongoose.Schema({
    imageType:String,
    imgUrl:String
});

module.exports = mongoose.model('galleries',Gallery);