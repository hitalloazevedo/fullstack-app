import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import appRoutes from "./src/routes/appRoutes.js";
import authMiddleware from "./src/middleware/authMiddleware.js";

const app = express();
const port = 3333 || process.env.PORT
const dbURI = "mongodb+srv://azevedohitallo:YjzrM4z7vPEj1AaQ@cluster0.6e2ju8n.mongodb.net/node-auth?retryWrites=true&w=majority";

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(
  cors({
    origin: [
      "http://127.0.0.1:5500",
      "https://azetel.netlify.app",
      "https://lunar-equinox-168551.postman.co",
      "http://127.0.0.1:3333",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Origin",
      "Authorization",
      "cookies",
      "x-access-token",
      "getsetcookie",
      "Set-Cookie",
    ],
    credentials: true,
  })
);

// database connection
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3333, console.log(`port ${port}`)))
  .catch((err) => console.log(err));

// routes
app.get("*", authMiddleware.checkUser);
app.get("/", (req, res) => res.send({ msg: "home" }));
app.use(authRoutes);
app.use(appRoutes);
