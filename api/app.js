import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRouter from "./routes/post.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();
console.log(process.env.CLIENT_URL)
app.use(cors({origin:process.env.CLIENT_URL,credentials:true}))
app.use(express.json());
app.use(cookieParser())


app.use("/api/posts", postRouter);
app.use("/api/auth", authRouter);

app.listen(8800, () => {
  console.log("server is running on port 8800");
});
