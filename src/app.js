import express from "express";
import productRouter from "./routes/product.js";
import authRouter from "./routes/auth.js";
import mongoose from "mongoose";

const app = express();
dotenv.config();

app.use(express.json());

app.use("/api", productRouter);
app.use("/api", authRouter);

mongoose.connect("mongodb://localhost:27017/we173xx");

// app.listen(PORT, () => {
//   console.log(`Server is running on: ${PORT}`);
// });

export const viteNodeApp = app;