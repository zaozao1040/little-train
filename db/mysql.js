const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db')

// 创建链接对象
const con = mysql.createConnection(MYSQL_CONF)

// 开始链接
con.connect()

// 统一执行 sql 的函数
function exec(sql) {
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                console.log('xxx',err)
                reject(err)
                return
            }
            console.log('eee',result)
            result = JSON.parse(JSON.stringify(result)) //去除从mysql数据库得到的RowDataPacket结构
            console.log('eee2',result)
            resolve(result)
        })
    })
    return promise
}

module.exports = {
    exec,
    escape: mysql.escape
}