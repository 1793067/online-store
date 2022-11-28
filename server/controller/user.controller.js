const db = require('../db');

//создадим класс, методы которого который покажут, что будет уметь наше приложение  

class UserController {
    async createUser(req, res) { //метод, создающий пользователя
        const {name, surname} = req.body;
        const newPerson = await /*запросы с БД асинхронные*/  db.query('INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *', [name, surname])
        console.log(name, surname);
        res.json(newPerson.rows[0]);
        //POSTMAN: POST -> /api/user -> body-> raw -> {"name": "bill", "surname": "shepher"} -> send
    }

    async getUsers(req, res) { //возвращает всех пользователей
        const users = await db.query('SELECT * FROM person')
        res.json(users.rows);
        //POSTMAN: GET -> /api/user -> body-> none -> send
    }

    async getOneUser(req, res) { //возвращает указанного пользователя
        const id = req.params.id //тот id, который определяется в routes
        const user = await db.query('SELECT * FROM person WHERE id = $1', [id])
        res.json(user.rows[0])
        //POSTMAN: GET -> /api/user/2 -> body-> none -> send
    }

    async updateUser(req, res) { //изменяет данные пользователя
        const {id, name, surname} = req.body;
        const user = await db.query('UPDATE person SET name = $1, surname = $2 WHERE id = $3 RETURNING *', [name, surname, id])
        res.json(user.rows[0])
        //PUT: POST -> /api/user -> body-> raw -> {"id": 1, "name": "Deeper", "Pains": "shepher"} -> send
    }

    async deleteUser(req, res) { //удаляет данные о пользователе
        const id = req.params.id //тот id, который определяется в routes
        const user = await db.query('DELETE FROM person WHERE id = $1', [id])
        res.json(user.rows[0])
        //POSTMAN: DELETE -> /api/user/3 -> body-> none -> send
    }
}

module.exports = new UserController();