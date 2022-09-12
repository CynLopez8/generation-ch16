USE sakila;

SELECT * FROM sakila.film;

-- El titulo de las peliculas, con el idioma que tienen : OK

-- SELECT title, language_id FROM film; Mi solucion, pero solo manda el ID
SELECT title, name FROM film, language;

-- Los actores que han trabajado en películas francesas 
SELECT first_name, last_name FROM film_actor WHERE language LIKE '%French%' FROM language;

SELECT * FROM sakila.film WHERE title LIKE '%French%';
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film WHERE language_id = '5';

-- El monto de un dia en especifico: Solución Thady
SELECT customer_id, SUM(amount) AS total_dia FROM payment WHERE payment_date BETWEEN '2005-06-15 00:00:00' AND '2005-06-15 23:59:59' GROUP BY customer_id ORDER BY total_dia DESC;


-- cuantas peliculas estan hechas en un mismo idioma? 1000 peliculas - OK
SELECT SUM(language_id) AS 'FILM MISMO IDIOMA' FROM film;

-- Las direcciones de cada país:
SELECT address, district FROM address ORDER BY district ASC;

