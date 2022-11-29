const db = require('../db');
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await db.query('INSERT INTO type (name) VALUES ($1) RETURNING *', [name])
        return res.json(type.rows[0])
    }

    async getAll(req, res) {
        const types = await db.query('SELECT * FROM type')
        res.json(types.rows);
    }

}

module.exports = new TypeController();