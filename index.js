require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const Note = require("./models/note");

app.use(cors());

app.get("/", (request, response) => {
  Note.find({}).then((notes) => {
    response.json(notes);
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Hello World. Server running on PORT ${PORT}`);
});
