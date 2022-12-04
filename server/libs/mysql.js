const mysql = require("mysql");
const dotenv = require("dotenv");
const config = require("./config");

dotenv.config();

const con = mysql.createConnection(config["development"]);

con.connect(function (err) {
    if (err) {
        console.error("mysql connection error :" + err);
    } else {
        console.info("mysql is connected successfully.");
    }
});

function SelectQuery(query) {
    return new Promise((resolve, reject) => {
        con.query(query, (error, rows) => {
            if (error) {
                console.log(error);
                return reject(error);
            }
            const results = Object.values(JSON.parse(JSON.stringify(rows)));
            let dataResult = [];
            for (let data of results) {
                dataResult.push(data);
            }

            console.log("dataResult:" + JSON.stringify(dataResult));
            return resolve(dataResult);
        });
    });
}

async function TransactionQuery(arrQuery) {
    if (arrQuery.length === 0) {
        return;
    }

    let sumQuery = "";
    arrQuery.forEach((q) => {
        if (q) {
            sumQuery += q + "\n";
        }
    });
    //sumQuery = tmpQueryConvert(sumQuery, req);

    let conn = null;
    try {
        conn = await con;
        await conn.beginTransaction();

        if (sumQuery === "") return;
        console.log(sumQuery);
        let results = await conn.query(sumQuery);
        await conn.commit();

        return results;
    } catch (e) {
        await conn.rollback();
        console.error(sumQuery);
        throw e;
    }
    //  finally {
    //     if (conn != null) {
    //         conn.release();
    //     }
    // }
}

module.exports = {
    SelectQuery,
    TransactionQuery,
};
