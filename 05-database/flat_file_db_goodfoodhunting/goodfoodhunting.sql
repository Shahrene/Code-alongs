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
