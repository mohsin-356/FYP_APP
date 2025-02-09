const express = require("express");
const app = express();
const Path = require("path");
const fs = require("fs");
const uploadDir = Path.join(__dirname, "public/images/upload");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log("Upload directory created:", uploadDir);
}

const morgan = require("morgan");
const customError = require("./Utils/customError");
const globalErrorHandler = require("./Controllers/errorController");

const userRouter = require("./Routes/userRoutes");
const cors = require("cors");
const bodyParser = require("body-parser"); // Importing body-parser

app.use(morgan("dev")); // Logging HTTP requests
// Body-parser added to handle URL encoded and JSON body parsing
app.use(bodyParser.json({ limit: "10000MB" })); // Limit JSON size to 10MB
app.use(bodyParser.urlencoded({ extended: true })); // To handle form data parsing
app.use(express.static(Path.join(__dirname, "public")));


app.use(
  cors({
    origin: "*", // Replace '*' with your allowed domain(s) in production.
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Specify allowed methods.
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers.
  })
);

app.use("/api/v1/user", userRouter);

app.all("*", (req, res, next) => {
  const err = new customError(
    `Can't find ${req.originalUrl} on this server`,
    404
  );
  next(err);
});

app.use(globalErrorHandler);

module.exports = app;
