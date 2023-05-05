
const express = require("express");


const app = express();

app.set("view engine", "ejs");


app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    switch(currentDay){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day="Saturday";
            break;
        default:
            console.log("Error");
    }

    res.render("frame", {KindOfDay: day});
});

app.listen(4000, function(){
    console.log("Server is running on port 4000.");
});