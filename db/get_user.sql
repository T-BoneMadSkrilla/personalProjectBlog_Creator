--join

SELECT * FROM userz_info WHERE user_id = $1;


-- CREATE TABLE user_info (
-- about_id SERIAL PRIMARY KEY,
-- user_logo TEXT,
-- hero_img TEXT,
-- blog_about_text TEXT,
-- user_id integer REFERENCES users(user_id)
-- )

-- CREATE TABLE users(
-- user_id SERIAL PRIMARY KEY,
-- user_email VARCHAR(500),
-- auth_id text
-- ) 

-- SELECT columns
-- FROM table1
-- FULL OUTER JOIN table2
-- ON table1.column = table2.column;