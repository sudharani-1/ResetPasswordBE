import mongoose from "mongoose";
//const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true , unique: true},
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true}
})

//module.exports = mongoose.model("users", UsersSchema);
const UserModel = mongoose.model("User", UserSchema)

export {UserModel as User}