import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean
  }
});

export const todoModel = mongoose.model("todos", todoSchema);
