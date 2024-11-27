// import mongoose, { Schema } from "mongoose";

// const userSchema = new Schema({
//   fullname: String,
//   email: { type: String, unique: true },
// });

// if (mongoose.models.Users) {
//   mongoose.models.users.schema = userSchema;
// }
// export const UserModel =
//   mongoose.models.users || mongoose.model("users", userSchema);

import mongoose, { Schema } from "mongoose";

// Define User Schema
const userSchema = new Schema({
  fullname: String,
  email: { type: String, unique: true },
});

// Check if model exists, if it does, use the existing schema; otherwise, create a new model.
if (mongoose.models.user) {
  mongoose.models.user.schema = userSchema;
}

export const UserModel = mongoose.models.user || mongoose.model("user", userSchema);
