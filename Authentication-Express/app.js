const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongoDb = "mongodb+srv://myAtlasDBUser:buttshah911@myatlasclusteredu.fcdub2a.mongodb.net/";

mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));


const User = mongoose.model(
    "User",
    new Schema({
        username: { type: String, required: true },
        password: { type: String, required: true }
    })
);

const match = await bcrypt.compare(password, user.password);
if (!match) {
    // passwords do not match!
    return done(null, false, { message: "Incorrect password" })
}


