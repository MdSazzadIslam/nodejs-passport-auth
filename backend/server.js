const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

let dbConfig = require("./database/db");
const passport = require("./config/passport");
const authRoute = require("./routes/authRoute");

//Connecting Database
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database successfully connected!");
    },
    (error) => {
      console.log("Could not connect to database: " + error);
    }
  );

//express server initialization
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//express session
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

//applying middleware
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/api/auth", authRoute);
app.get("/", (req, res) => {
  res.send("Welcome");
});
//PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port" + port);
});

//404
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err, message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
