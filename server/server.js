const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const port = process.env.SERVER_PORT ? process.env.SERVER_PORT : 3002;

const bodyParser = require("body-parser");
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.get("/api/healthCheck", (req, res) => {
    console.log("ServerHealthCheck");
    res.send("ClientHealthCheck");
});

router.use(function (req, res, next) {
    // run for any & all requests
    console.log("Connection to the API.."); // set up logging for every API call
    next(); // ..to the next routes from here..
});

let myRoutes = require("./Router/ApiRouter");

app.use("/api", myRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
