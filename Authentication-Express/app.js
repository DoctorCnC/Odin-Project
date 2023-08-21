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



const app = express();
app.set("views", __dirname);
app.set("view engine", "ejs");

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("index", { user: req.user });
});

app.listen(3000, () => console.log("app listening on port 3000!"));
app.get("/sign-up", (req, res) => res.render("sign-up-form"));

app.post("/sign-up", async (req, res, next) => {
    try {
        const user = new User({
            username: req.body.username,
            password: req.body.password
        });
        const result = await user.save();
        res.redirect("/");
    } catch (err) {
        return next(err);
    };
});

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    };
});

app.post(
    "/log-in",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/"
    })
);





passport.use(
    new LocalStrategy(async (username, password, done) => {

        try {
            const user = await User.findOne({
                username: username
            });
            if (!user) {
                return done(null, false, {
                    message: "incorret username"
                });

            };
            if (user.password !== password) {
                return done(null, false, {
                    message: " incorrenct passowrd"
                });
            };


            return done(null, user);
        } catch (err) {
            return done(err);
        };
    })

);
passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const user = await User.findOne({ username: username });
            if (!user) {
                return done(null, false, { message: "Incorrect username" });
            };
            if (user.password !== password) {
                return done(null, false, { message: "Incorrect password" });
            };
            return done(null, user);
        } catch (err) {
            return done(err);
        };
    })
);




