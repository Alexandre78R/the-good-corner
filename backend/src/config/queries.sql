DROP TABLE if EXISTS ad;
DROP TABLE if EXISTS category;

CREATE TABLE category
(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCHAR(100)
);


CREATE TABLE ad 
(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title VARCHAR(100) NOT NULL,
	description TEXT,
	owner VARCHAR(100) NOT NULL,
	price REAL,
    picture VARCHAR(255),
    location VARCHAR(100),
	createdAt DATE,
  	categoryId INTEGER NOT NULL,
	CONSTRAINT fk_ad_category
	FOREIGN KEY (categoryId)
	REFERENCES category(id)
);

INSERT INTO category (name) VALUES ('vêtements'), ('voiture'), ('autres'), ('informatique'), ('tv'), ('téléphone'), ('carte'), ('SW');

INSERT INTO ad (title, description, owner, price, location, picture, createdAt, categoryId) VALUES 
('Vieux jeans troués', 'Jeans d occasion en bon état, quelques trous.', 'Nick', 200, 'Bordeaux', 'https://media.istockphoto.com/id/1201412474/fr/photo/trous-dans-un-vieux-jean-bleu-d%C3%A9chir%C3%A9-manque-dargent-pour-acheter-de-nouveaux-v%C3%AAtements-mise.jpg?s=612x612&w=0&k=20&c=O0mhDSlhRzKiqlD8DxpAg7Nr5Pc30P3J3U1ATuWLuVc=',1),
('T-shirt hello world', 'T-shirt neuf avec l inscription "Hello World".', 'Pierre', 9.99, 'Lyon', 'https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C51HI1GTgXHL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY780_.png', '2023-09-02', 2),
('Chaussettes Wild Code School', 'Chaussettes aux couleurs de Wild Code School.', 'Anna', 4.49, 'Paris', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGo1K2m8-khBoKWm8gBvlYvzeQl1_FbTqIfexxRNeMGgbTroRIzUVhIbzBswnFq1Luns&usqp=CAU', '2023-09-01', 2),
('R5 pour pièces', 'Voiture Renault R5 pour pièces détachées.', 'Patrick', 100, 'Bordeaux', 'https://img.leboncoin.fr/api/v1/lbcpb1/images/02/31/e7/0231e78dfe5b17693b658cc89553792bec923175.jpg?rule=ad-large', '2023-09-10', 3),
('DeLorean DMC-12', 'Voiture DeLorean DMC-12, modèle célèbre de Retour vers le futur.', 'Marty', 70000, 'Paris', 'https://upload.wikimedia.org/wikipedia/commons/3/35/DeLorean_DMC-12_%289979%29.jpg', '2023-09-13', 1),
('Peugeot 206', 'Voiture d occasion en bon état.', 'Amélie', 2000, 'Lyon', 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Peugeot_206_Quicksilver_90.jpg', '2023-09-05', 3),
('Opel Corsa', 'Voiture Opel Corsa en bon état.', 'Lucie', 1000, 'Bordeaux', 'https://images.caradisiac.com/images/7/5/8/4/177584/S0-nouvelle-opel-corsa-prix-des-14-600-eur-597846.jpg', '2023-09-06', 2),
('Jeu de cartes Pokémon collector', 'Jeu de cartes Pokémon en édition collector.', 'Jean', 350, 'Lyon', 'https://m.media-amazon.com/images/I/71+J7LqrciL._AC_UF894,1000_QL80_.jpg', '2023-09-06', 2),
('Chaîne hi-fi complète', 'Ensemble complet de chaîne hi-fi en bon état.', 'Jean', 80, 'Paris', 'https://boulanger.scene7.com/is/image/Boulanger/3666638048110_pdm_0?wid=500&hei=500', '2023-09-01', 4),
('Macbook', 'Odinateur très puissant pour coder !!!', 'Alexandre', 9999, 'Paris', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-config-20220606?wid=820&hei=498&fmt=jpeg&qlt=90&.v=1654122880566', '2023-09-01', 4);

INSERT INTO tag (name) VALUES ('tag1'), ('tag2'), ('tag3'), ('tag4');

-- Ex 1
-- SELECT * FROM ad; 

-- SELECT * FROM ad WHERE location = 'Bordeaux';

-- DELETE FROM ad WHERE price > 40; 

-- UPDATE ad SET price = 0 WHERE createdAt = '2023-09-01'

-- SELECT AVG(price) FROM ad WHERE location = 'Paris'

-- SELECT location, AVG(price) as 'prix moyen des annonces' FROM ad GROUP BY location

-- Ex 2
SELECT * from ad as art JOIN category as cat ON cat.id = art.category_id where cat.name = 'vêtements';
SELECT * FROM ad WHERE category_id = "2" OR category_id = "1";
SELECT AVG(price) FROM ad WHERE category_id = "3" ;
SELECT title FROM ad WHERE title LIKE 'v%';

-- Ex 2 (joiture)
SELECT * from ad as a JOIN category as c ON c.id = a.category_id where c.name = 'vêtements';
SELECT * FROM ad as a JOIN category as c ON a.category_id = c.id where c.name = 'vêtements' or c.name = 'voiture';
SELECT AVG(price) FROM ad as a JOIN category as c ON a.category_id = c.id WHERE category_id = "3" ;
SELECT title FROM ad as a JOIN category as c ON a.category_id = c.id WHERE title LIKE 'v%' ;