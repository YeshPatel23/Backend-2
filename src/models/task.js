const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
  title: {
    type: String,
    reuired: true,
    trim: true,
  },
  amount: {
    type: Number,
    reuired: true,
    trim: true,
  },
  date: {
    type: String,
    reuired: true,
    trim: true,
  },
});

module.exports = Task;
