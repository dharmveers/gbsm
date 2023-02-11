const mongoose=require('mongoose');

const About=mongoose.Schema({
    imgUrl:"String",
    cardName:"String",
    profession:"String"
});

module.exports = mongoose.model('about',About);