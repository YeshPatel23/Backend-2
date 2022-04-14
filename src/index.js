const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const app = express();
const port = process.env.PORT || 4000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests not allowed");
//   } else {
//     next();
//   }
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// app.post("/tasks", (req, res) => {
//   const task = new Task(req.body);

//   task
//     .save()
//     .then(() => {
//       res.status(200).send(task);
//     })
//     .catch((error) => {
//       res.status(400).send(error);
//     });
// });

// app.get("/tasks", (req, res) => {
//   Task.find({})
//     .then((tasks) => {
//       res.send(tasks);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.get("/tasks/:id", (req, res) => {
//   const _id = req.params.id;

//   Task.findById(_id)
//     .then((task) => {
//       if (!task) {
//         return res.status(404).send();
//       }

//       res.send(task);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.post("/users", (req, res) => {
//   const user = new User(req.body);

//   user
//     .save()
//     .then(() => {
//       res.status(200).send(user);
//     })
//     .catch((error) => {
//       res.status(400).send(error);
//     });
// });

// app.get("/users", (req, res) => {
//   User.find({})
//     .then((users) => {
//       res.send(users);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.get("/users/:id", (req, res) => {
//   const _id = req.params.id;

//   User.findById(_id)
//     .then((user) => {
//       if (!user) {
//         return res.status(404).send();
//       }

//       res.send(user);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

app.listen(port, () => {
  console.log("server is running on port " + port);
});
