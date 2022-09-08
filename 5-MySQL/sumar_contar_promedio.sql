USE sakila;

SELECT * FROM sakila.payment;

-- SUM (), AVG (), COUNT ()

SELECT customer_id, amount FROM payment;

-- COUNT() cuenta las filas de una tabla: 
SELECT COUNT(*) AS 'Cantidad de filas' FROM payment;
SELECT COUNT(*) FROM payment;

SELECT COUNT(*) AS 'Cantidad de paises' FROM world.country;


-- Cantidad de ventas que tuvo el trabajador 2:
SELECT COUNT(*) FROM payment WHERE staff_id = 2;

-- Cantidad de clientes distintos
SELECT COUNT(customer_id) FROM payment; -- Con esto contamos todos los clientes con transacciones
SELECT COUNT(DISTINCT customer_id) FROM payment; -- Con esto contamos los clientes ISTINTOS (id distinto)

-- SUM ()

SELECT SUM(amount) AS 'Total de rentas' FROM payment WHERE staff_id = 1;

-- ¿Cual cliente realizo mas rentas? 148 - 46 / 318 - 12
SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) ASC;

-- GROUP BY : Agrupa solo si se usa con SUM, AVG y COUNT, si lo usamos solo omite los valores repetidos
-- ORDER BY : Ordena segun la columna o funcion que le indiquemos ASC desc

SELECT * FROM payment ORDER BY staff_id ASC;
SELECT * FROM payment GROUP BY staff_id;

-- ¿Cual cliente realizo mas rentas? 148 - 46 / 318 - 12
