INSERT INTO userz(user_email, auth_id) VALUES ($1, $2);

SELECT * FROM userz WHERE auth_id = $2;