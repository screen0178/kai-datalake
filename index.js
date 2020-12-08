const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// connect to db
mongoose.connect(process.env.DB_CONNECT,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        },
        () => console.log("connected to db")
  );

// import routes
const authRoutes = require("./routes/auth");
const kairawRoutes = require("./routes/kairaw");
const verifyToken = require("./routes/validate-token");

// middlewares
app.use(express.json()); // for body parser

// route middlewares
app.use("/api", authRoutes);

// this route is protected with token
app.use("/api", verifyToken, kairawRoutes);
app.get("/", (req, res) => {
  res.json({ message: "Application Start." });
});
// start server
app.listen(process.env.PORT, () => console.log("server is running..."));