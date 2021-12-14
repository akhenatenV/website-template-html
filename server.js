const express = require("express");
const path = require("path");
const app = express();
app.use("/static", express.static('./static/'));
const port = 3000;

app.listen(port, function(){
    console.log("listening on port: " + port);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/index.js");
});
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/index.css");
});


