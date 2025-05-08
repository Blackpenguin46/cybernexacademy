import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import linkRoutes from "./routes/linkRoutes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api/links", linkRoutes);

app.listen(PORT, () => {
  console.log(`CyberNex MCM server running at http://localhost:${PORT}`);
});