CREATE DATABASE goodfoodhunting;

CREATE TABLE dishes (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(200),
  img_url VARCHAR(400)
);

SELECT name, img_url FROM dishes;
SELECT id, name, img_url FROM dishes;
SELECT * FROM dishes;

INSERT INTO dishes (name, img_url) VALUES ('jelly', 'http://www.kosovarja.eu/media/kosovarja.eu/images/2017/November/21/auto_1B78ABE0000005DC-0-image-a-52_15112249198931511304559.jpg');
INSERT INTO dishes (name, img_url) VALUES ('cake', 'http://homecookingadventure.com/images/recipes/Chocolate_Mirror_Cake_main.jpg');

CREATE TABLE comments (
  id SERIAL4 PRIMARY KEY,
  content VARCHAR (400) NOT NULL,
  dish_id INTEGER NOT NULL,
  FOREIGN KEY (dish_id) REFERENCES dishes (id) ON DELETE CASCADE
);

insert into comments
(content, dish_id)
VALUES
('Great', 1);

CREATE TABLE users (
  id SERIAL4 PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  password_digest VARCHAR(400) NOT NULL
);

alter table comments add column user_id integer;

CREATE TABLE likes (
  id SERIAL4 PRIMARY KEY,
  user_id INTEGER NOT NULL,
  dish_id INTEGER NOT NULL,
  FOREIGN KEY (dish_id) REFERENCES dishes (id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
)

-- DROP TABLE comments;
