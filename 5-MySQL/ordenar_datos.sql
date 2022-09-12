USE world;

SELECT * FROM country;

SELECT Name, Population FROM country ORDER BY Population DESC;

SELECT Name, Population FROM country WHERE Name = 'Mexico';

SELECT * FROM country WHERE Name = 'Mexico';

-- Alias:
SELECT 5 + 5;

SELECT Name AS Nombre_de_pais, Population AS 'Poblacion del pais' FROM country ORDER BY Nombre_de_pais DESC;

SELECT DISTINCT Continent FROM country; -- Distinct filtra los datos repetidos

-- WHERE cláusula
-- <> <= => != =

SELECT * FROM country WHERE LifeExpectancy <50 ORDER BY LifeExpectancy DESC;

SELECT * FROM country WHERE Continent != 'North America' ORDER BY Continent ASC;


-- Between

SELECT * FROM country WHERE Population BETWEEN 50000000 and 70000000 ORDER BY Population DESC;
SELECT * FROM country WHERE Population NOT BETWEEN 50000000 and 70000000 ORDER BY Population DESC;

-- OR / AND / != OPERADORES LÓGICOS

SELECT * FROM country WHERE Continent = 'Asia' OR Continent = 'Europe' OR Continent = 'North America';
SELECT * FROM country WHERE Continent != 'Asia' AND Continent != 'EuropE' OR Continent != 'North America';

-- Operador IN
SELECT * FROM country WHERE Continent IN ('Asia', 'Europe', 'North America') ORDER BY Continent;
SELECT * FROM country WHERE Continent NOT IN ('Asia', 'Europe', 'North America') ORDER BY Continent;

-- Filtrar Valores nulos NULL
-- SELECT columna FROM tabla WHERE columna IS NOT NULL;
SELECT * FROM country WHERE IndepYear IS NOT NULL;
SELECT * FROM country WHERE IndepYear IS NULL;


-- LIKE sirve para buscar cualquier cantidad de caracteres
-- % Buscar cualquier cantidad de caracteres
-- '_' Especificamos un caracter

SELECT * FROM country WHERE Name LIKE '%and%';
SELECT * FROM country WHERE Name LIKE '%e_a';
SELECT * FROM country WHERE Continent LIKE 'asia';
