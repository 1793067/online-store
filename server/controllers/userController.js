const db = require('../db');
require('dotenv').config();
const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt') //для того, чтобы  хешировать пароли и не хранить их в базе данных в открытом виде
const jwt = require('jsonwebtoken');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role='USER'} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        //проверка, есть ли уже такой пользователь в системе:
        const candidate = await db.query('SELECT * FROM users WHERE email = $1', [email])
        if (candidate.rows.length) { //количество найденных записей из полученного SQL запроса
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await db.query('INSERT INTO users (email, password, role) VALUES ($1, $2, $3) RETURNING *', [email, hashPassword, role])
        
        const {id: userId, email: userEmail, role: userRole} = user.rows[0]; //получение свойств из объекта user и  присвоение их значений переменным с именами userId, userEmail, userRole
        
        const basket = await db.query('INSERT INTO basket (user_id) VALUES ($1) RETURNING *', [userId])
        const token = generateJwt(userId, userEmail, userRole)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await db.query('SELECT * FROM users WHERE email = $1', [email])
        if (!user.rows.length) {
            return next(ApiError.internal('Пользователь с таким email не найден'))
        }
        const {id: userId, email: userEmail, password: userPassword, role: userRole} = user.rows[0];
        // с помощью bcrypt сравниаем пароль с зашифрованным в БД:
        let comparePassword = bcrypt.compareSync(password, userPassword)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(userId, userEmail, userRole)
        return res.json({token})
    }

    async check(req, res, next) { //генерируем новый токен и отправляем на клиент
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController();