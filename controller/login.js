const { exec, escape } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')

const login = (phoneNumber, password) => {
    phoneNumber = escape(phoneNumber)

    // 生成加密密码
    password = genPassword(password)
    password = escape(password)

    // const sql = `
    //     select phone_number, user_name from lt_user where phone_number=${phoneNumber} and password=${password}
    // `
    const sql = `select phone_number, user_name from lt_user where phone_number=${phoneNumber} and password='333333'`
    // console.log('sql is', sql)
    return exec(sql).then(rows => {
        return rows[0] || {}
    })
}

module.exports = {
    login
}