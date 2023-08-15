import express from "express";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json()); //this is required to send any data to the database.
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

app.listen(3000, () => {
  console.log("Connected to MySQL DataBase.");
});
