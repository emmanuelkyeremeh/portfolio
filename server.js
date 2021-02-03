const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Portfolio App");
});

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Connection Successful");
});

const submitRouter = require("./routes/submit");

app.use("/submit", submitRouter);

app.listen(port, () => console.log(`Listening on port ${port}.....`));
