import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log(err));

app.listen(4002, () => {
  console.log("backend is connected");
});
