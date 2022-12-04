// const Common = require("../libs/Common.js");
// const pb = require("../protobuf/response_pb.js");
const db = require("../libs/mysql");

const express = require("express");
const router = express.Router();

router.route("/CreateUserData").get(getRouteHandlerForCreateUserData).post(postRouteHandlerForCreateUserData);
router.route("/UserList").get(getRouteHandlerForUserList).post(postRouteHandlerForUserList);

async function getRouteHandlerForCreateUserData(req, res) {
    //handle GET route here
    try {
        res.send({ test: "hi" });
    } catch (err) {
        console.error(err);
    }
}

//2022-12-04 00:00:00
async function postRouteHandlerForCreateUserData(req, res) {
    //handle POST route here
    try {
        const { userIdx, score, updateDt, season } = req.body;
        await db.TransactionQuery([`INSERT INTO users (userIdx, score, updateDt, season) VALUES ('${userIdx}',${score},'${updateDt}',${season})`]);
        res.send();
    } catch (err) {
        console.error(err);
    }
}

async function getRouteHandlerForUserList(req, res) {
    //handle GET route here
    try {
        let userRanking = await db.SelectQuery(`SELECT *, rank() over(order by score desc) AS ranking FROM users`);
        res.send(userRanking);
    } catch (err) {
        console.error(err);
    }
}
async function postRouteHandlerForUserList(req, res) {
    //handle GET route here
    try {
        let userRanking = await db.SelectQuery(`SELECT *, rank() over(order by score desc) AS ranking FROM users`);
        res.send(userRanking);
    } catch (err) {
        console.error(err);
    }
}

module.exports = router;
