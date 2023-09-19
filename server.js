const express = require("express");

const app = express();

app.get("/", function(request , response){
    response.send("hello");
});

    app.get("/contact" , function(req,res){
        res.send("contact me at new port");
    });

    app.get("/about" , function(req , res){
        res.send(" My name is Shubham chowjar");

    });
    app.get("/hobbies" , function(req , res){
        res.send(" <ul><li>code</li><li>break</li></ul>");

    });

app.listen(3000 , function(){
    console.log("server started on 3000");
});

