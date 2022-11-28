const Router = require('express');
const router = new Router();
const postController = require('../controller/post.controller')

//для каждого метода userControler определим марщруты:

router.post('/post', postController.createPost);
router.get('/post', postController.getPostByUser);


module.exports = router;