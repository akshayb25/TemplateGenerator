const express = require("express");
const router = express.Router();
const fs = require("fs");

router.post("/", function (req, res) {
  //read container html file
  let htmlSource = fs.readFileSync("./front/container.ejs", "utf8");
  let htmlOldSource = htmlSource;
 let partialTempStr = '';
 
  let {child,body} = req.body;

  for (let index = 0; index < child.length; index++) {
    partialTempStr += `<%- include('${child[index]}',{uiid${index + 1}:uiid${
      index + 1
    }}); %>`;
  }
  //replace add template string with pertial templates
  htmlSource = htmlSource.replace("addTemplateHere", partialTempStr);
  //write to file with string
  fs.writeFileSync("./front/container.ejs", htmlSource, "utf8");
  //cal render methos to send html
  res.render("container", body);
  // again set container with old ejs
  fs.writeFileSync("./front/container.ejs", htmlOldSource, "utf8");
});

module.exports = router;
