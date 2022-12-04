// config.js 파일에 환경변수를 조회하기 위한 코드 작성

const dotenv = require("dotenv");

dotenv.config();

const config = {
    development: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: "root",
        password: process.env.DB_PASSWORD,
        database: "rankingboard",
    },
};

module.exports = config;
