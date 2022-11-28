const db = require('../db');

//создадим класс, аналогично post.controller

class PostController {
    async createPost(req, res) { //метод, создающий пользователя
        const {title, content, userId} = req.body;
        const newPost = await /*запросы с БД асинхронные*/  db.query('INSERT INTO post (title, content, user_id) VALUES ($1, $2, $3) RETURNING *', [title, content, userId])
        console.log(title, content, userId)
        res.json(newPost.rows[0]);
        //POSTMAN: POST -> /api/post -> body-> raw -> {"title":"darkbook","content":"dark magic","userId":"1"} -> send
    }

    async getPostByUser(req, res) { //возвращает всех пользователей
        const id = req.query.id; //получение ID не из строки запроса, а из query параметров, указываемых после вопросительного знака "?"
        const posts = await db.query('SELECT * FROM post WHERE user_id = $1', [id])
        res.json(posts.rows);
        //GET: POST -> /api/post?id=1 -> body-> none -> send
    }

}

module.exports = new PostController();