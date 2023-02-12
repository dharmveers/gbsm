const { request, response } = require("express");
const express=require("express");

const {route}=require("express/lib/application");
const Details=require("../models/Detail");
const Sliders=require("../models/Slider");
const Services=require('../models/Service');
const Contact=require('../models/Contact');
const About=require('../models/About');
const Gallery=require('../models/Gallery');
const Suggestion=require('../models/Suggestion');
const Content=require('../models/newsContent');

const routes=express.Router();


routes.get("/",async(request, response) =>{
   const detail=await Details.find();
   const slider=await Sliders.find();
   const service=await Services.find();
   const content=await Content.find();
    response.render("index",
    {
        detail:detail,
        slider:slider,
        service:service,
        content:content
    });
   
});

routes.get("/about",async(request, response) =>{
    const detail=await Details.find();
    const slider=await Sliders.find();
    const about= await About.find();
    response.render("about",
    {
        detail:detail,
        slider:slider,
        about:about
    });
});

routes.get("/gallery",async(request, response) =>{
    const detail=await Details.find();
    const slider=await Sliders.find();
    const gallery= await Gallery.find();
    response.render("gallery",
    {
        detail:detail,
        slider:slider,
        gallery:gallery
    });
});

routes.get("/contact",async(request, response) =>{
    const detail=await Details.find();
    response.render("contact",{detail:detail});
});

routes.post("/process-contact-form",async(request,response) =>{
    try{
        const query= await Contact.create(request.body);
        response.redirect("/");
    }catch(e){console.log(e);}
});

routes.post("/process-send-suggestion",async(request,response) =>{
    try{
        const query= await Suggestion.create(request.body);
        response.redirect("/",response.send("thanks for your suggestion...."));
    }catch(e){console.log(e);}
});

module.exports = routes;
