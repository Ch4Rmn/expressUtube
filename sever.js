const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
// const mongoose = require("mongoose");
const mongooseDB = require("mongoose");


const port = 3000;

// mongoose 
mongooseDB
.connect('mongodb://username:password@localhost:27017/expressHome')
.then(() => console.log('connect')
.catach((error) => {
  console.log(error);
})
)

// package use
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(
  session({
    secret: "DSADASKDMASKNKSJFKASJFKSALDKLANS",
    resave: false,
    saveUninitialized: false,
  })
);

// router
const groceryRouter = require("./router/groceryRouter");

const marketRouter = require("./router/marketRouter");

const authRouter = require("./router/auth");
const { mongo, default: mongoose } = require("mongoose");
const { Mongoose } = require("mongoose");

// prefix
app.use("/api/groceries", groceryRouter);
app.use("/api/market", marketRouter);
app.use("/api/auth", authRouter);

app.use(function (req, res, next) {
  //   console.error(err.stack);
  console.log(`${req.method}:${req.url}`);
  //   res.status(500).send('Something broke!')
  next();
});

// middlware with auth username
app.use(function (req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.status(500).send("Something broke!");
  }
});

// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
