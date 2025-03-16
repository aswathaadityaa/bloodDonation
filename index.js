import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser, { urlencoded } from "body-parser";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port);
