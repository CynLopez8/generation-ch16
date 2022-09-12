DROP DATABASE shades;

CREATE DATABASE shades;
USE shades;
-- DROP DATABASE shades;

/*
-- DROPS
DROP TABLE producto;
DROP TABLE usuario;
DROP TABLE carrito;


-- SELECTS (Mostrar tablas)
SELECT * FROM producto;
SELECT * FROM usuario;
SELECT * FROM carrito;
SELECT * FROM categoria;
SELECT * FROM metododepago;
SELECT * FROM pivote;
SELECT * FROM tipodepago;

*/

-- TABLAS
CREATE TABLE producto( 
producto_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
categoria_id VARCHAR(100) NOT NULL,
precio DECIMAL(8,2) NOT NULL,
descripcion VARCHAR(250) NOT NULL
);

CREATE TABLE categoria(
categoria_id VARCHAR(100) NOT NULL PRIMARY KEY,
nombre_categoria VARCHAR (50) NOT NULL
);

CREATE TABLE usuario(
usuario_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
contrasenia VARCHAR(20) NOT NULL, 
nombre VARCHAR(65) NOT NULL,
correo VARCHAR(40) NOT NULL,
direccion VARCHAR(70) NOT NULL,
telefono VARCHAR(12) NOT NULL
);

CREATE TABLE carrito (
orden_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
usuario_id INT NOT NULL,
producto_id INT NOT NULL,
cantidad_productos INT NOT NULL,
fecha_compra DATE NOT NULL,
total DECIMAL(5,2) NOT NULL
);

CREATE TABLE pivote(
pivote_id INT NOT NULL PRIMARY KEY,
producto_id INT NOT NULL,
orden_id INT NOT NULL
);

CREATE TABLE tipodepago(
pago_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
metodopago VARCHAR(30) NOT NULL
);

CREATE TABLE metododepago(
metodopago_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
usuario_id INT NOT NULL,
pago_id INT NOT NULL,
banco VARCHAR(70) NOT NULL,
numcuenta BIGINT NOT NULL,
expanio VARCHAR(2) NOT NULL,
expmes VARCHAR(2) NOT NULL
);

-- producto categoria
ALTER TABLE producto
ADD CONSTRAINT fk_categoria_producto
FOREIGN KEY (categoria_id)
REFERENCES categoria(categoria_id);

-- Agregar llave foránea BIEN
ALTER TABLE pivote
ADD CONSTRAINT fk_producto_pivote
FOREIGN KEY (producto_id)
REFERENCES producto (producto_id);

-- Agregar llave foránea BIEN
ALTER TABLE carrito
ADD CONSTRAINT fk_usuario_carrito
FOREIGN KEY (usuario_id)
REFERENCES usuario (usuario_id);

ALTER TABLE metododepago
ADD CONSTRAINT fk_metodopago_usuario
FOREIGN KEY (usuario_id)
REFERENCES usuario(usuario_id);
ALTER TABLE metododepago
ADD CONSTRAINT fk_metodopago_tipodepago
FOREIGN KEY (pago_id)
REFERENCES tipodepago(pago_id);

ALTER TABLE pivote
ADD CONSTRAINT fk_pivote_carrito
FOREIGN KEY (orden_id)
REFERENCES carrito(orden_id);

INSERT INTO usuario(contrasenia, nombre, correo, direccion, telefono)
VALUES('aaaa', 'Juan Perez Perez', 'a@gmail.com', 'San Mateo 172 colonia tezozomoc Azcapotzalco', 5551538623),
('pass', 'Samantha Castellanos Rios', 'sama@gmail.com', 'Indios Verdes 25 colonia Quinta seccion Ciudad de Mexico', 5521265879),
('holaxd', 'Elizabeth Olsen', 'Eli@gmail.com', 'Metepec 25 colonia Venta Estado de México', 5567489398),
('7777', 'Pedro Perez Perez', 'c@gmail.com', 'Arabella 15 colonia Hidalgo Tlahuac', 5567538623),
('ffff', 'Maria Perez Perez', 'd@gmail.com', 'Xochipilli 190 colonia Hidalgo Xochimilco', 5590538623);

INSERT INTO carrito(usuario_id, producto_id, cantidad_productos, fecha_compra, total)
VALUES(1, 1, 1, '2022-09-03', 599),
(2, 2, 2, '2022-09-04', 675),
(3, 3, 3, '2022-09-05', 865),
(4, 4, 4, '2022-09-06', 456),
(5, 5, 5, '2022-09-07', 458);


INSERT INTO categoria(categoria_id,nombre_categoria)
VALUES('1','Maquillaje'),
('2','skin care'),
('3','cuidado de cabello'),
('4','cuidado corporal');

INSERT INTO tipodepago
(metodopago)
VALUES
('Tarjeta de crédito'),
('Tarjeta de débito'),
('Transferencia'),
('Transferencia2');

INSERT INTO metododepago(usuario_id, pago_id, banco, numcuenta, expanio, expmes)
VALUES(1, 1, 'BBVA', 1234567887654321, 23, 05),
(2, 2, 'SANTANDER', 1234567984654321, 24, 02),
(3, 3, 'BANAMEX', 1234567883654321, 25, 07),
(4, 4, 'BANCO AZTECA', 1234767887654321, 23, 11);

CREATE TABLE producto( 
producto_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
categoria_id VARCHAR(100) NOT NULL,
precio DECIMAL(8,2) NOT NULL,
descripcion VARCHAR(250) NOT NULL
);

/*
INSERT INTO producto (nombre, categoria_id, precio, descripcion)
VALUES ('Serum Anti-acné', 499, 'Nuestro Serum Anti-acné sirve para combatir el Acné, reducir poros y puntos negros así como reducir el exceso de grasa.'),
('Hidratante', 549, 'Hidratante dermatocosmético intenso. Calma y repara la barrera cutánea. Probada en piel con tendencia alérgica.'),
('Skin Care', 599, 'Nuestro suero disminuye la apariencia de manchas oscuras, ayuda a aumentar la luminosidad y a unificar el tono de la piel con el uso continuo.'),
('Serum Hidratante', 429, 'Hidratación intensa y duradera, combate la pérdida de firmeza, suaviza arrugas y líneas finas, mejora la textura y el grosor de la Piel.'),
('Peeling Gel', 629, 'Solución exfoliante biológica de alta eficacia para pieles sensibles. Elimina suavemente células muertas, partículas contaminantes, polvo y otras impurezas de la superficie, dejando la piel fresca y sedosa.');
*/

INSERT INTO categoria(categoria_id,nombre_categoria)
VALUES('1','Maquillaje'),
('2','skin care'),
('3','cuidado de cabello'),
('4','cuidado corporal');

INSERT INTO producto (nombre, categoria_id, precio, descripcion)
VALUES ('Serum Anti-acné', '2', 499, 'Nuestro Serum Anti-acné sirve para combatir el Acné, reducir poros y puntos negros así como reducir el exceso de grasa.'),
('Hidratante', '2', 549, 'Hidratante dermatocosmético intenso. Calma y repara la barrera cutánea. Probada en piel con tendencia alérgica.'),
('Skin Care','2', 599, 'Nuestro suero disminuye la apariencia de manchas oscuras, ayuda a aumentar la luminosidad y a unificar el tono de la piel con el uso continuo.'),
('Serum Hidratante', '2', 429, 'Hidratación intensa y duradera, combate la pérdida de firmeza, suaviza arrugas y líneas finas, mejora la textura y el grosor de la Piel.'),
('Peeling Gel', '2',  629, 'Solución exfoliante biológica de alta eficacia para pieles sensibles. Elimina suavemente células muertas, partículas contaminantes, polvo y otras impurezas de la superficie, dejando la piel fresca y sedosa.');


