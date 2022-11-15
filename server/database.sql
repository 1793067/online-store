CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE, 
    password VARCHAR(255),
    role VARCHAR(255) DEFAULT 'USER'
);

CREATE TABLE type(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE brand(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE type_brand(
    type_id INTEGER REFERENCES type (id) ON DELETE CASCADE, --при удалении строк, связанные тоже будут удалены
    brand_id INTEGER REFERENCES brand (id) ON DELETE CASCADE,
    position SERIAL,
    CONSTRAINT type_brand_pk PRIMARY KEY(type_id, brand_id)
);

CREATE TABLE device(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    price INT NOT NULL,
    rating INT DEFAULT 0,
    img VARCHAR NOT NULL,
    type_id INTEGER,
    brand_id INTEGER,
    FOREIGN KEY (type_id) REFERENCES type (id),
    FOREIGN KEY (brand_id) REFERENCES brand (id)
);

CREATE TABLE device_info(
    id SERIAL PRIMARY KEY,
    device_id INTEGER,
    title VARCHAR(255),
    description VARCHAR(255) DEFAULT 'This is very good product',
    FOREIGN KEY (device_id) REFERENCES device (id)
);

CREATE TABLE basket(
    id SERIAL PRIMARY KEY,
    user_id INTEGER UNIQUE REFERENCES users ON DELETE CASCADE
);

CREATE TABLE basket_device(
    id SERIAL PRIMARY KEY,
    basket_id INTEGER REFERENCES basket (id) ON DELETE CASCADE, --при удалении строк, связанные тоже будут удалены
    device_id INTEGER REFERENCES device (id) ON DELETE CASCADE,
);

CREATE TABLE rating(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    device_id INTEGER,
    rate INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (device_id) REFERENCES device (id) ON DELETE CASCADE
);





