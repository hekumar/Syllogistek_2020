require('./common');
const express = require("express");
const path = require("path");
const mailer = require('./mailService');
const helmet = require('helmet');
const bodyParser = require("body-parser");
// mailer.contact({ body: { fName: "HKKKKK", sd: "sdsdsds" } }, { send: function(x = "sd") { console.log(x); } })
const app = express();

app.use(helmet());
app.use(helmet.frameguard())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
console.log(path.join(process.cwd(), "/dist/Sylogitekweb"));
// app.use(function(req, res, next) {
//         res.header("Access-Control-Allow-Origin", "*");
//         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//         next();
//     })
// C:\Users\HemantKumar\Desktop\IOT\New folder\Angular\HTMLDemo\templateapp\dist\templateapp
app.use(express.static(path.join(process.cwd(), "/dist/syllogistekweb")));
app.get("/", (req, res) => {
    console.log("gf");
    res.sendFile(path.join(process.cwd(), "/dist/syllogistekweb/index.html"));
});


app.get("/api/courses/assets", (req, res) => {
    const file = `./assets/${req.query.document}.pdf`
    res.setHeader("Content-Type", "application/pdf");
    res.download(file);
});

app.post("/api/contact", mailer.contact);


var port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("Server running at http://localhost:%d", port);
});