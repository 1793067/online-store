const db = require('../db');
const uuid = require('uuid'); //генерирует случайные неповторяющиеся  id
const path = require('path');
const ApiError = require('../error/ApiError')

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, type_id, brand_id, info} = req.body;
            const {img} = req.files
            let fileName = uuid.v4() + ".jpeg"; //для генерации уникального имени
            img.mv(path.resolve(__dirname, '..', 'static', fileName)) //перемещаем полученный файл в папку static

            const device = await db.query('INSERT INTO device (name, price, img, type_id, brand_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                [name, price, fileName, type_id, brand_id])

            if (info) {
                info = JSON.parse(info) //данные, переданные через form-data передаются  в виде массива, поэтому его необходимо будет распарсить в json строку для frontend
                info.forEach(element => {
                    const deviceInfo = db.query('INSERT INTO device_info (title, description, device_id) VALUES ($1, $2, $3) RETURNING *',
                    [element.title, element.description, device.id]) //возможно тут неверно. так  кака непонятно как выглядит объект info 
                }); 
            }
            
            return res.json(device.rows[0])
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
//postman post -> body -> form-data так как необходимо прикрепить файл с изображением

    async getAll(req, res) {
        let {type_id, brand_id, limit, page} = req.query;
        page = page || 1;
        limit = limit || 9; 
        let offset = page * limit - limit //вывод товаров на каждую следующую страницу по 9 штук
        let devices;
        if (!type_id && !brand_id) {
            devices = await db.query('SELECT * FROM device LIMIT $1 OFFSET $2', [limit, offset])
            //не реализован способ подсчета количества товаров из выборки 
        }
        if (!type_id && brand_id) {
            devices = await db.query('SELECT * FROM device WHERE brand_id = $1 LIMIT $2 OFFSET $3', [brand_id, limit, offset])
        }
        if (type_id && !brand_id) {
            devices = await db.query('SELECT * FROM device WHERE type_id = $1 LIMIT $2 OFFSET $3', [type_id, limit, offset])
        }
        if (type_id && brand_id) {
            devices = await db.query('SELECT * FROM device WHERE type_id = $1 AND brand_id = $2', [type_id, brand_id])
        }
        return res.json(devices.rows)
    }
    
    async getOne(req, res) {
        const {id} = req.params
        const device = await db.query('SELECT device.id, name, price, rating, img, type_id, brand_id, title, description FROM device LEFT JOIN device_info ON device_info.device_id = $1;', [id])
        return res.json(device.rows)
    }
}

module.exports = new DeviceController();