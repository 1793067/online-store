const express = require('express');
require('dotenv').config();
const cors = require('cors') //чтобы отправлять запросы из браузера. Способ обхода same origin policy
const fileUpload = require('express-fileupload') //для загрузки файлов для базы данных
const router = require('./routes/index')
const errorHandler = require('./middleWare/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000; //порт с которого будет работать приложение

const app = express(); // создаем объект, с которого будет начинаться запуск приложения
app.use(express.json()); // express  по умолчанию не может распарсить json формат. Для этого нужно это явно указать
app.use(express.static(path.resolve(__dirname, 'static'))) //указываем, что файлы из папки static нужно раздавать как static, чтобы мы могли их видеть в браузере
app.use(cors());
app.use(fileUpload({}));
app.use('/api', router)

//middleWare, который работает с ошибками, обязательно долджен идти последним
app.use(errorHandler)


app.listen(PORT, () => console.log('server started on port: ', PORT)) // создание функции, прослушивающей порт PORT

