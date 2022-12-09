// const Common = require("../libs/Common.js");
// const pb = require("../protobuf/response_pb.js");
const db = require("../libs/mysql");

const express = require("express");
const router = express.Router();

router.route("/CreateUserData").get(getRouteHandlerForCreateUserData).post(postRouteHandlerForCreateUserData);
router.route("/UserList").get(getRouteHandlerForUserList).post(postRouteHandlerForUserList);
router.route("/DeleteUser").get(getRouteHandlerForDeleteUser).post(postRouteHandlerForDeleteUser);
router.route("/UpdateUser").get(getRouteHandlerForUpdateUser).post(postRouteHandlerForUpdateUser);

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
        let userRanking = await db.SelectQuery(`SELECT * FROM users`);
        res.send(userRanking);
    } catch (err) {
        console.error(err);
    }
}
async function postRouteHandlerForUserList(req, res) {
    //handle GET route here
    try {
        let userRanking = await db.SelectQuery(`SELECT * FROM users`);
        res.send(userRanking);
    } catch (err) {
        console.error(err);
    }
}
async function getRouteHandlerForDeleteUser(req, res) {
    //handle GET route here
    try {
        const { idx } = req.body;
        await db.TransactionQuery([`DELETE FROM users WHERE idx = ${idx}`]);
        res.send();
    } catch (err) {
        console.error(err);
    }
}
async function postRouteHandlerForDeleteUser(req, res) {
    //handle GET route here
    try {
        const { idx } = req.body;
        await db.TransactionQuery([`DELETE FROM users WHERE idx = ${idx}`]);
        res.send();
    } catch (err) {
        console.error(err);
    }
}

async function getRouteHandlerForUpdateUser(req, res) {
    //handle GET route here
    try {
        const { idx, userIdx, score, updateDt, season } = req.body;
        await db.TransactionQuery([`UPDATE users SET userIdx = '${userIdx}', score = ${score}, updateDt = '${updateDt}',season=${season} WHERE idx = ${idx}`]);
        res.send();
    } catch (err) {
        console.error(err);
    }
}
async function postRouteHandlerForUpdateUser(req, res) {
    //handle GET route here
    try {
        const { idx, userIdx, score, updateDt, season } = req.body;
        await db.TransactionQuery([`UPDATE users SET userIdx = '${userIdx}', score = ${score}, updateDt = '${updateDt}',season=${season} WHERE idx = ${idx}`]);
        res.send();
    } catch (err) {
        console.error(err);
    }
}

module.exports = router;
