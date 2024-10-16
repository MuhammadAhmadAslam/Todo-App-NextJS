import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
  todo: String,
  isCompleted: Boolean,
});

export const TodoModal =
  mongoose.models.todos || mongoose.model("todos", todoSchema);