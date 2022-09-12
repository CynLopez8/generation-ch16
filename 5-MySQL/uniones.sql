USE tienda;

SELECT * FROM tienda.compra;

INSERT INTO compra(cliente_id, fecha_compra, total, cantidad_productos)
VALUES (3, '2022-09-06', 300.50, 2),
(9, '2022-09-07', 100, 2);

INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES ('Pedro', 'Páramo', '555555234', 'Comala'),
('Raul', 'Sanchez', '555555234', 'Hidalgo'),
('Victor', 'Fernández', '555555234', 'Comala'),
('Magali', 'Quiroz', '555555234', 'CDMX'),
('María', 'Vargas', '555555234', 'CDMX'),
('Marina', 'Pardo', '555555234', 'CDMX');

-- Inner Join
-- Explicita

SELECT *
FROM clientes 
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;

SELECT 
clientes.cliente_id AS 'Número de cliente',-- Tablas a mostrar
clientes.nombre, -- Tablas a mostrar
compra.* -- Le indicamos que queremos todo de compra
FROM clientes -- Selección de TABLA BASE 
INNER JOIN compra -- Selección de la SEGUNDA TABLA
ON clientes.cliente_id = compra.cliente_id; -- Especificamos la columna de relacion

-- Aqui no muestra nada porque no hay datos relacionales o coincidentes
SELECT *
FROM clientes 
INNER JOIN compra
ON clientes.nombre = compra.orden_id;


-- Unión implicita
SELECT * -- Seeccionamos todo
FROM clientes, compra -- Pedimos la info que queremos mostrar
WHERE clientes.cliente_id = compra.cliente_id; -- Establecemos la condición para que nos muestre mas especifico

-- LEFT JOIN

SELECT *
FROM clientes
LEFT JOIN compra -- Columna de la izquierda
ON clientes.cliente_id = compra.cliente_id;


-- RIGHT JOIN

SELECT *
FROM clientes
RIGHT JOIN compra -- Columna de la izquierda
ON clientes.cliente_id = compra.cliente_id;

-- Mostrar las direcciones de cada pais
USE sakila;

/*
	De la tabla address - la columna que comparten es :
    address - city_id/address
    city - city_id / city / country_id
    
    Tercer columna: 
    country - country_id / country
*/

SELECT 
address.address,
city.city,
city.country_id
FROM address -- Selección de TABLA BASE 
INNER JOIN city -- Selección de la SEGUNDA TABLA
ON address.city_id = city.city_id; -- Especificamos la columna de relacion

SELECT usuarios.username, 
juegos.juegoname 
FROM usuarios 
INNER JOIN juegousuario 
ON usuarios.ID = juegousuario.ID_usuario 
INNER JOIN juegos 
ON juegousuario.ID_juego = juegos.ID


SELECT 
country.country AS Pais,
city.city AS Ciudad,
address.address AS Dirección
FROM country
INNER JOIN city 
ON city.country_id = country.country_id
INNER JOIN address -- Tercera tabla
ON address.city_id = city.city_id;
