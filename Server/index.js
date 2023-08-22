import express from "express";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

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

const storage = multer.diskStorage({
  // 'diskStorage' is defined as a multer configuration.
  destination: function (req, file, cb) {
    // 'destination' is used to describe the place where the uploaded files are stored.
    cb(null, "../Client/public/uploads"); // 'cb' stands for 'callback'.
  },
  filename: function (req, file, cb) {
    // 'filename' is used to describe the name that will be given to the uploaded files.
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage }); //here, upload is initializing the multer middleware to previously designed 'storage' configuration.

app.post("/api/upload", upload.single("file"), function (req, res) {
  // this describes the route used to call the 'multer' middleware.
  const file = req.file;
  res.status(200).json(file.filename);
});

app.listen(3000, () => {
  console.log("Connected to MySQL DataBase.");
});
