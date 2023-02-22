const express = require("express");

const app = express();

const PORT = 5000;
const moogoose = require("mongoose");

const connectDB = require("./config/database");
const homeRoutes = require("./routes/home");

require("dotenv").config({ path: "./config/.env" });
// connect to detabase
connectDB();

// set middleware

app.set("view engine", "ejs");
app.set(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// set routes
app.use("/", homeRoutes);

// start Server
app.listen(PORT, () => console.log(`server listening port ${PORT}`));
