// libs
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

// route imports
const apiRouter = require("./src/routers/apiRouter");

const app = express();
const port = process.env.PORT || 3333;
const dbURL = "mongodb://localhost:27017/matchmaid";

// database connection
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(port, () => {
      console.log(`Running at http://localhost:${port}`);
    })
  )
  .catch((err) => console.log(err));

// middleware
app.use(express.json());
app.use(cors());
//app.use(express.urlencoded({ extended: true }));

// routes
app.use("/rest", apiRouter);
