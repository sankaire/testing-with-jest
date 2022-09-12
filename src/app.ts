import express from "express";

export const app = express();
app.use(express.json());

app.get("/api/", (req, res) => {
  res.send("Hi There!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000!!!!!!");
});
