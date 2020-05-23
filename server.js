const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "abdyrasul",
  multipleStatements: true,
  //   port: "/var/run/mysqld/mysqld.sock",
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected: " + err);
  } else {
    console.log("Connection Failed: " + err);
  }
});

app.listen(3000);
