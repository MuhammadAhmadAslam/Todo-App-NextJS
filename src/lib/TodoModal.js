// import mongoose, { Schema } from "mongoose";

// const todoSchema = new Schema({
//   todo: { type: String, unique: true },
//   isCompleted: Boolean,
//   user: { type: mongoose.Types.ObjectId, ref: "users" }
// });
// if (mongoose.models.Todos) {
//   console.log('schema update')
//   mongoose.models.Todos.schema = todoSchema;
// }
// export const TodoModal =
//   mongoose.models.Todos || mongoose.model("Todos", todoSchema);


import mongoose, { Schema } from "mongoose";

// Define Todo Schema
const todoSchema = new Schema({
  todo: { type: String, unique: true },
  isCompleted: Boolean,
  user: { type: mongoose.Types.ObjectId, ref: "User" }, // Reference to User model, case-sensitive
});

// Check if model exists, if it does, use the existing schema; otherwise, create a new model.
if (mongoose.models.Todo) {
  console.log('Schema update');
  mongoose.models.Todo.schema = todoSchema;
}

export const TodoModel = mongoose.models.Todo || mongoose.model("Todo", todoSchema);
