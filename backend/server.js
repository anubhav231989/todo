const express = require("express");
const bodyParser = require("body-parser");
const todos = require("./app/controller.js");

const app = express();
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// ROUTES.

app.post("/api/v1/todo", todos.create);
app.get("/api/v1/todos", todos.all);
app.post("/api/v1/todo/update/:id", todos.markCompleted);
app.post("/api/v1/todo/remove/:id", todos.remove);

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});