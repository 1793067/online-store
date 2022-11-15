require('dotenv').config();
const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.DB_USER,
    //password: '1793067', // пароль, который указывал при установке postgres. У меня в настройках отключено требование ввода пароля
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // порт, указанный по умолчанию при установке, либо другой, если менял
    database: process.env.DB_NAME  
});

module.exports = pool;