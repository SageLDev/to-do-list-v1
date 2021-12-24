const express = require("express");
const app = express();
const date = require(__dirname + "/date.js");

const port = 3000;


app.set("view engine", "ejs");

// statis directory file
app.use(express.static("public"));
//express' body parser setup
app.use(express.urlencoded({
  extended: true
}));

let items = [];
let workItems = [];

app.get("/", function(req, res) {

  let currentDay = date.getDate();

  res.render("list", {
    listTitle: currentDay,
    newListItems: items
  });
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.post("/", function(req, res) {
  let item = req.body.itemBox;

  if (req.body.addButton === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.post("/reload", function(req, res){
  if (req.body.reloadButton === "Work List") {
    workItems = [];
    res.redirect("/work");
  } else {
    items = [];
    res.redirect("/");
  }
});

app.listen(port, function() {
  console.log("Server running on port: " + port);
});
