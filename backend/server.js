import express from "express";
import { main } from "./db.js";
import { createUser } from "./controller/userController.js";
const app = express();
const port = 3000;

app.use(express.json());

main().catch((err) => {
  console.log(err);
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  console.log('-- Incoming request on url "/" -- ');
  res.send("Hello from '/' ");
});

app.post("/create", async (req, res) => {
  console.log('-- Incoming request on url "/create" --');
  const data = req.body;
  const result = await createUser(data);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
