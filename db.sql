CREATE DATABASE mangoDB;

USE mangoDB;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    navn VARCHAR(255) NOT NULL,
    passord VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE mangoScore (
    id INT NOT NULL AUTO_INCREMENT,
    mangos INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);