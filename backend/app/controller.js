const Todo = require("./model.js");

// CREATE NEW TODO.
exports.create = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        error: "Empty Todo."
      });
    }
    console.log(req);
    const todo = new Todo({
      title: req.body.title,
      completed: false
    });

    Todo.create(todo, (err, data) => {
      if (err)
        res.status(500).send({
          error:
            err.message
        });
      else res.send(data);
    });
  };

// GET ALL TODOS.
exports.all = (req, res) => {
    Todo.all((err, data) => {
      if (err)
        res.status(500).send({
          error:
            err.message 
        });
      else res.send(data);
    });
  };


// MARK TODO COMPLETED.
exports.markCompleted = (req, res) => {
  
    Todo.markCompleted(
      req.params.id,
      new Todo(req.body),
      (err, data) => {
        if (err) {
            res.status(500).send({
              error: err.message
            });
          }
        else res.send(data);
      }
    );
  };

// DELETE TODO.
exports.remove = (req, res) => {
    Todo.remove(req.params.id, (err, data) => {
      if (err) {
          res.status(500).send({
            error: err.message
          });
        }
      else res.send("Deleted.");
    });
  };

