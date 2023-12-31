import express from "express";
import database from "./utils/db.js";
import "dotenv/config";
import cors from "cors";
import { userRoute } from "./routes/user.js";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 25, //  maximum of 25 request per minute
});

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.static("/public"));
app.use(express.json());
app.use("/api/v1", limiter, userRoute);

await database();

app.use("/", (req, res) => {
  res.status(404).json({
    message: "Welcome to the comply counsel api",
  });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

export default app;
