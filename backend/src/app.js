import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend running successfully",
  });
});

export default app;
