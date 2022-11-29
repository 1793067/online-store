const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    if (req.method === "OPTIONS") { //пропускаем, если метод OPTIONS. Нас интересуют только POST, GET, PUT, DELETE
        next()
    }
    try {
        //токен обычно помещают в header authorization в следующем виде:
        //тип токена + сам токен: "Bearer iJIUzI1Ni..."
        //отсюда его необходимо выцепить
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({message:"Необходимо авторизоваться"})
        }
        //если токен есть, то раскодируем его
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch (error) {
        res.status(401).json({message: "Необходимо авторизоваться"})
    }
}