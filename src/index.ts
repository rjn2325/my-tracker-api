import express from "express";
import "dotenv/config";
import { habitsRouter } from "./routes/routes";

const app = express();

app.use(express.json());
app.use(habitsRouter);

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});