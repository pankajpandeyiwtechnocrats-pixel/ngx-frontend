import dotenv from "dotenv";
import app from "./app.js";
import "./utils/db.js";
import "./utils/redis.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
