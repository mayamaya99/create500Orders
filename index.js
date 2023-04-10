const express = require("express");

const app = express();
var fs = require("fs");

let ServerOrderArray = [];

fileManager = {
  read: function () {
    const stat = fs.statSync("orderData.json");
    var rawdata = fs.readFileSync("orderData.json");
    ServerOrderArray = JSON.parse(rawdata);
  },
  write: function () {
    let data = JSON.stringify(ServerOrderArray);
    fs.writeFileSync("orderData.json", data);
  },
};

app.use(express.static("public"));
app.use(express.json());

app.listen(3000, () => {
  console.log("listening on 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submitOrder1", (req, res) => {
  const order = req.body;
  console.log("Received order:", order);
  res.json({ message: "Order added successfully." });
});
