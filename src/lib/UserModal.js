const { default: mongoose } = require("mongoose");

let UserSchema = new mongoose.Schema({
       userName: {type : "String", unique: true},
       email: {type : "String", unique: true}
})

let UserModal = mongoose.model.User || mongoose.model("User", UserSchema);