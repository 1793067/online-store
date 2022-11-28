CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);

create TABLE post (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);

/*

psql --username=postgres --dbname=postgres
CREATE DATABASE test;
\c test;
\i D:/learning_Stack/projects/online_store/server/testDB.sql;

*/