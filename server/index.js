const express = require('express');
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')

const PORT = process.env.PORT || 5000; //порт с которого будет работать приложение

const app = express(); // создаем объект, с которого будет начинаться запуск приложения
app.use(express.json()); // express  по умолчанию не может распарсить json формат. Для этого нужно это явно указать
app.use('/api', userRouter);
app.use('/api', postRouter);


app.listen(PORT, () => console.log('server started on port: ', PORT)) // создание функции, прослушивающей порт PORT

