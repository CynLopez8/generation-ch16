-- Comentario de una linea;
/*
Bloque de comentario
*/
SHOW DATABASES;

CREATE DATABASE tienda;

USE tienda;

DROP DATABASE tienda;

CREATE TABLE clientes(
cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL, 
telefono CHAR (50) NOT NULL, 
direccion VARCHAR(150) NOT NULL
); 

INSERT INTO clientes(nombre, apellido, telefono, direccion)
VALUES ('Pedro', 'Paramo', '55555555234', 'Comala'),
 ('Raul', 'Sanchez', '55555555234', 'Comala'),
 ('Victor', 'Fernández', '55555555234', 'Comala');
SELECT * FROM clientes;

DELETE FROM clientes
WHERE cliente_id = 4;