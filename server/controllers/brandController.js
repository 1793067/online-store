const db = require('../db');
const ApiError = require('../error/ApiError');

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await db.query('INSERT INTO brand (name) VALUES ($1) RETURNING *', [name])
        return res.json(brand.rows[0])
    }

    async getAll(req, res) {
        const brands = await db.query('SELECT * FROM brand')
        res.json(brands.rows);
    }

}

module.exports = new BrandController();