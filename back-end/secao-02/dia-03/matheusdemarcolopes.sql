USE sakila;

SELECT * FROM customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * FROM customer WHERE active IS FALSE AND store_id = 2 AND first_name <> 'KENNETH' ORDER BY first_name;

SELECT 
    title, description, release_year, rating, replacement_cost
FROM
    film
WHERE
    replacement_cost >= 18.00
        AND rating = 'G'
        OR rating = 'PG'
        OR rating = 'PG-13'
ORDER BY replacement_cost DESC , title
LIMIT 100;

SELECT * FROM customer WHERE store_id = 1 AND active IS TRUE;

SELECT * FROM customer WHERE store_id = 1 AND active IS FALSE;

SELECT * FROM film WHERE rating = 'NC-17' ORDER BY rental_rate, title LIMIT 50;

SELECT * FROM film WHERE title LIKE '%ace%';

SELECT * FROM film WHERE description LIKE '%china';

SELECT * FROM film WHERE description LIKE '%girl%' AND title LIKE '%lord';

SELECT * FROM film WHERE title LIKE '___gon%';

SELECT * FROM film WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

SELECT * FROM payment WHERE customer_id IN (269, 239, 126, 399, 142);

SELECT * FROM customer WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy') ORDER BY first_name;

SELECT * FROM payment WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01' ORDER BY payment_date LIMIT 12000;