import express from "express";

const bodyParser = require("body-parser");

const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// app.use("/v1", require("./api/v1"));
app.get('/', function (req, res) {
    res.send('Hello World!');
  });


  app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
  });