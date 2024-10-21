const { Schema, default: mongoose } = require("mongoose");

const todoSchema = new Schema({
       todo: String,
       isCompleted: Boolean,
       user: {type: mongoose.Types.ObjectId , ref: "Users"}
})


export const TodoModal =
  mongoose.models.Todos || mongoose.model("Todos", todoSchema);