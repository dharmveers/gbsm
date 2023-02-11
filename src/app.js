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
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{

     //create slider collection
    /*Slider.create([
        {
            title:"Gyan Bharti Shishu Mandir",
            subTitle:"Celebrates 75th Independance day",
            imgUrl:"/images/s1.jpg",
            class:"active"
        },
        {
            title:"Independence Day",
            subTitle:"75th Independance day of Indian Nation",
            imgUrl:"/images/s2.jpg"
        },
        {
            title:"Har Ghar Tiranga",
            subTitle:"Azadi Ka Amrit Mahotsav",
            imgUrl:"/images/s3.jpg"
        }
    ]); */

    //create details collection
    /* Details.create({
        brandName:"Info Technical Solutions",
        brandIconUrl:"images/logo.gif",
        link:[
            {
             label:"Home",
             url:"/",
            },
            {
             label:"About",
             url:"/about",
            },
            {
             label:"Gallery",
             url:"/gallery",
            },
            {
             label:"Services",
             url:"/services",
            },
            {
             label:"Contact Us",
             url:"/contact",
            }
        ] 
    });*/

//service creation
/* Service.create([
    {
    icon:"fa-accusoft",
    title:"Provides Best Courses",
    description:"We have provides best facilities and environment to builde our student career",
    linkText:"Check",
    link:""
    },
    {
    icon:"fa-linkedin",
    title:"Play Way Facilities",
    description:"Diffent type of games and events are organised to build a positive envoirnment",
    linkText:"Check",
    link:""
    },
]); */

/* create card details */
    /* About.create([
        {
            imgUrl:"/images/principal.jpeg",
            cardName:"Mr. Brijraj Singh",
            profession:"Director (M.A/Msc)"
            
        },
        {
            imgUrl:"/images/assh.jpeg",
            cardName:"Ashvani Singh",
            profession:"Vice Principal"
            
        },
        {
            imgUrl:"/images/irfan.jpeg",
            cardName:"Ashvani Singh",
            profession:"Vice Principal"
            
        },
        {
            imgUrl:"/images/dharam.jpg",
            cardName:"Dharmveer Singh",
            profession:"Full Stack Developer"
            
        }
    ]); */

    /* create schema for gallery */
    /*Gallery.create([
        {
            imageType:"campus",
            imgUrl:"images/campus1.jpg",
        },
        {
            imageType:"campus",
            imgUrl:"images/campus2.jpeg",
        },
        {
            imageType:"event",
            imgUrl:"images/events.jpg",
        },
        {
            imageType:"event",
            imgUrl:"images/gbsm-rally1.jpg",
        },
        {
            imageType:"event",
            imgUrl:"images/gbsm-rally2.jpg",
        },
        {
            imageType:"activity",
            imgUrl:"images/s1.jpg",
        },
        {
            imageType:"activity",
            imgUrl:"images/gbsm-rally3.jpg",
        },
        {
            imageType:"campus",
            imgUrl:"images/s2.jpg",
        }
    ]);
    */

    //news content 
   /* Content.create([
        {
            class:"fas fa-book",
            content:"Qualified and Experience Teachers"
        },
        {
            class:"fas fa-money-check-alt",
            content:"Scholarship for Poor Students and Free Education for Physically Disabled"
        },
        {
            class:"fas fa-chalkboard-teacher",
            content:"Clean and Environmental classes"
        },
        {
            class:"fas fa-book",
            content:"free books for Students"
        },
        {
            class:"fa-duotone fa-school",
            content:"Playground ,Clean Water Resources with a Beautiful Campus"
        },
        {
            class:"fa-light fa-bus",
            content:"Van Facilities are available"
        }
    ]); */

    console.log("connected successfully");


}).catch((e)=>{ console.log(e);  });