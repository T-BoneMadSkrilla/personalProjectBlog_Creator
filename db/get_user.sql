--join

SELECT userz_info.about_id, userz_info.user_logo, userz_info.hero_img, userz_info.blog_about_text, userz.user_email FROM userz_info FULL OUTER JOIN userz 
ON userz_info.user_id = userz.user_id WHERE userz_info.user_id = $1;



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