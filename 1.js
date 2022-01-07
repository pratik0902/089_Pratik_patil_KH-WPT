const mysql=require("mysql");
const Promise=require("bluebird");
const Async = require("bluebird/js/release/async");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
const dbinfo={
    host: "localhost",
    user: "root",
    password: "password",
    database: "react"
};
const getall=async()=>{
    const connection=mysql.createConnection(dbinfo);
    const sql=`SELECT * FROM msg`;
    const list=await connection.queryAsync(sql,[]);
    await connection.endAsync();
    return list;
}

const postall=async(user)=>{
    const connection=mysql.createConnection(dbinfo);
    const sql=`INSERT INTO msg (text,sender) VALUES (?,?)`;
    await connection.queryAsync(sql,[user.text,user.sender]);
    await connection.endAsync();
}

module.exports={getall,postall};
