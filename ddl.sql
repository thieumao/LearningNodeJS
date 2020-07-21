mysql -u root -p

CREATE DATABASE IF NOT EXISTS `db_book`;

CREATE TABLE IF NOT EXISTS `db_book`.`books` (
    `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `description` text NOT NULL,
    `author` varchar(255) NOT NULL
);

INSERT INTO books (name, description, author) VALUES ('How to code', 'React Native, iOS, Android', 'Thieu Mao');