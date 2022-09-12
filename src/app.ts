import express from "express";

export const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).send("Hi There!");
});
