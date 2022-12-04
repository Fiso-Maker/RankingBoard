const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//     res.send({ test: "hi" });
// });

router.route("/").get(getRouteHandler).post(postRouteHandler);

function getRouteHandler(req, res) {
    //handle GET route here
    try {
        console.log("TestCheck1");
        res.send({ test: "hi" });
    } catch (err) {
        console.error(err);
    }
}

function postRouteHandler(req, res) {
    //handle POST route here
    try {
        console.log("TestCheck2");
        res.send({ test: "hi" });
    } catch (err) {
        console.error(err);
    }
}

module.exports = router;
