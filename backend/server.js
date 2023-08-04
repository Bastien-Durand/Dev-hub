import express from "express";
import { main } from "./db.js";
import { createUser, login } from "./controller/userController.js";
const app = express();
const port = 8080;

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
  console.log(req.body);
  console.log('-- Incoming request on url "/" -- ');
  res.send("Hello from '/' ");
});

app.get("/login", async (req, res) => {
  console.log(req.body);
  console.log('-- Incoming request on url "/login" -- ');
  const data = req.body;
  const result = await login(data);
  res.send(result);
});

app.post("/create", async (req, res) => {
  console.log('-- Incoming request on url "/create" --');
  console.log(req.body);
  const data = req.body;
  const result = await createUser(data);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
