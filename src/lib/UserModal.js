const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
});

// Check if the model already exists, and use it if it does, otherwise create a new one
export const UserModel =
  mongoose.models.Users || mongoose.model("Users", UserSchema);
