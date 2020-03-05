const sql = require("./connection.js");

// constructor
const Todo = function(todo) {
  this.title = todo.title;
  this.completed = todo.completed;
};

Todo.create = (newTodo, result) => {
  sql.query("INSERT INTO todos SET ?", newTodo, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    let output = { id: res.id, ...newTodo };
    result(null, output);
  });
};

Todo.all = result => {
  sql.query("SELECT * FROM todos", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Todo.markCompleted = (id, todo, result) => {
  sql.query(
    "UPDATE todos SET completed = 1 WHERE id = ?",
    [id],
    (err, res) => {
      if (err) {
        result(null, err);
        return;
      }
      let output = { id: id };
      result(null, output);
    }
  );
};

Todo.remove = (id, result) => {
  sql.query("DELETE FROM todos WHERE id = ?", id, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};

module.exports = Todo;