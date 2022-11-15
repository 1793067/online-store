require('dotenv').config();
const express = require('express');
const db = require('./db');

const PORT = process.env.PORT || 5000; //порт с которого будет работать приложение

const app = express(); // создаем объект, с которого будет начинаться запуск приложения

app.listen(PORT, () => console.log('server started on port: ', PORT)) // создание функции, прослушивающей порт PORT

