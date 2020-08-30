const express = require("express");
const path = require("path");
const app = express();
console.log(path.join(process.cwd(), "/dist/Sylogitekweb"));
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
    // C:\Users\HemantKumar\Desktop\IOT\New folder\Angular\HTMLDemo\templateapp\dist\templateapp
app.use(express.static(path.join(process.cwd(), "/dist/syllogistekweb")));
app.get("/", (req, res) => {
    console.log("gf");
    res.sendFile(path.join(process.cwd(), "/dist/syllogistekweb/index.html"));
});

app.post("api/html", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    console.log("api/html");
    res.end(JSON.stringify({ "fulfillmentText": "Hello Hemant!" }));
});

app.post('/hi', (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    console.log("req");
    res.end(JSON.stringify({ "fulfillmentText": "Hello Hemant!" }));
});
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server running at http://localhost:%d", port);
});