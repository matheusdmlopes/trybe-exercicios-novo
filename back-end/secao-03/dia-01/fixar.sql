USE sakila;

SELECT film_id, title, IF (title = 'ACE GOLDFINGER', 'OK', 'FALTA ASSISTIR') AS 'filme visto?' FROM film;

SELECT title, rating, CASE
WHEN rating = 'G' THEN 'Livre para todas as idades' 
WHEN rating = 'PG' THEN 'Maiores de 10 anos'
WHEN rating = 'PG-13' THEN 'Maiores de 13 anos'
WHEN rating = 'R' THEN 'Maiores de 17 anos'
ELSE 'Proibido para menores de idade'
END AS 'grupo-alvo'
FROM film;