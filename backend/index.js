const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


const bodyParser = require("body-parser");
const { parse } = require("url");
const path = require("path");
const dev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();



app
  .prepare()
  .then(() => {
    const cors = require("cors");
    const server = express();
    const SendEmailRoute = require('./sendEmailBali');
   
   

    server.use(express.static(__dirname + "/"));
    server.engine("html", require("ejs").renderFile);
    server.set("view engine", "html");
    server.set("views", __dirname);

  

   

    server.post("/", function (req, res) {
      var strdat = "";

      req.on("data", function (chunk) {
        strdat += chunk;
      });

      
    });

    server.use(
      cors({
        origin: "http://localhost:3000",
      })
    );
    server.use(express.json());
    dotenv.config();
  
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(
      express.urlencoded({
        extended: true,
      })
    );
   

    //connection
    const connection = mongoose
      .connect(
        "mongodb+srv://holidayscrowd:holidayscrowd@holidayscrowd.x4svn.mongodb.net/?retryWrites=true&w=majority"
      )
      .then(console.log("Database Connected"))
      .catch((err) => {
        console.log(err);
      });
    if (!connection) {
      return "Could not connect to server";
    }
    
    // const parsedUrl = parse(req.url, true)
    // const { pathname, query } = parsedUrl

    server.use("/api/email", SendEmailRoute);

    server.use(express.static(path.resolve(__dirname, 'public')))
    



    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });