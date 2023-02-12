require('dotenv').config();
const express=require("express");
const routes=require("./routes/main");
const mongoose=require("mongoose");
const bodyParser=require('body-parser');
const hbs=require("hbs");
const Details=require("./models/Detail");
const Slider=require("./models/Slider");
const Service=require('./models/Service');
const About=require('./models/About');
const Gallery=require('./models/Gallery');
const Suggestion=require('./models/Suggestion');
const Content = require('./models/newsContent');


const app=express();
const port=process.env.PORT;

//static/css/style.css
app.use(express.static('public'));

//template engine
app.set("view engine","hbs");
app.set("views", "templates/views");

//parsing data
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use('',routes);

//nabbar item
hbs.registerPartials("templates/partials");

app.get("/",(request, response) =>{
    response.send("welcom to Home page");
});

//port connection
app.listen(port|8082,() => {
    console.log("server started successfully.....");
});

//database connection 127.0.0.1
mongoose.set('strictQuery', true);
const dbConn=async () =>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("db Conneted succesfully...");
    }catch(e){console.log(e);}
}
