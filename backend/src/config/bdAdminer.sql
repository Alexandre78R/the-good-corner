-- Adminer 4.8.1 PostgreSQL 16.1 (Debian 16.1-1.pgdg120+1) dump

DROP TABLE IF EXISTS "ad";
DROP SEQUENCE IF EXISTS ad_id_seq;
CREATE SEQUENCE ad_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."ad" (
    "id" integer DEFAULT nextval('ad_id_seq') NOT NULL,
    "title" character varying(50) NOT NULL,
    "description" text,
    "owner" character varying NOT NULL,
    "price" double precision NOT NULL,
    "location" character varying NOT NULL,
    "picture" character varying NOT NULL,
    "createdAt" timestamp DEFAULT now() NOT NULL,
    "updatedAt" timestamp DEFAULT now() NOT NULL,
    "categoryId" integer,
    CONSTRAINT "PK_0193d5ef09746e88e9ea92c634d" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "ad" ("id", "title", "description", "owner", "price", "location", "picture", "createdAt", "updatedAt", "categoryId") VALUES
(1,	'Vieux jeans troués',	'Jeans d occasion en bon état, quelques trous.',	'Nick',	200,	'Bordeaux',	'https://media.istockphoto.com/id/1201412474/fr/photo/trous-dans-un-vieux-jean-bleu-d%C3%A9chir%C3%A9-manque-dargent-pour-acheter-de-nouveaux-v%C3%AAtements-mise.jpg?s=612x612&w=0&k=20&c=O0mhDSlhRzKiqlD8DxpAg7Nr5Pc30P3J3U1ATuWLuVc=',	'2023-11-29 16:15:34.356128',	'2023-11-29 16:15:34.356128',	1),
(12,	'toto1',	'DESCRIPTION',	'Alexandre78R',	200,	'dd',	'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/langfr-552px-Google_Images_2015_logo.svg.png',	'2023-11-29 17:03:18.351594',	'2023-11-29 17:03:18.351594',	2),
(9,	'Chaîne hi-fi complète',	'Ensemble complet de chaîne hi-fi en bon état.',	'Jean',	80,	'Paris',	'https://boulanger.scene7.com/is/image/Boulanger/3666638048110_pdm_0?wid=500&hei=500',	'2023-11-29 16:18:20.824038',	'2023-11-29 16:18:20.824038',	1),
(10,	'Macbook',	'Odinateur très puissant pour coder !!!',	'Alexandre',	9999,	'Paris',	'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-config-20220606?wid=820&hei=498&fmt=jpeg&qlt=90&.v=1654122880566',	'2023-11-29 16:18:39.233269',	'2023-11-29 16:18:39.233269',	1),
(4,	'R5 pour pièces',	'Voiture Renault R5 pour pièces détachées.',	'Patrick',	100,	'Bordeaux',	'https://img.leboncoin.fr/api/v1/lbcpb1/images/02/31/e7/0231e78dfe5b17693b658cc89553792bec923175.jpg?rule=ad-large',	'2023-11-29 16:16:49.107331',	'2023-11-29 16:16:49.107331',	2),
(5,	'DeLorean DMC-12',	'Voiture DeLorean DMC-12, modèle célèbre de Retour vers le futur.',	'Marty',	70000,	'Paris',	'https://upload.wikimedia.org/wikipedia/commons/3/35/DeLorean_DMC-12_%289979%29.jpg',	'2023-11-29 16:17:05.093579',	'2023-11-29 16:17:05.093579',	2),
(6,	'Peugeot 206',	'Voiture d occasion en bon état.',	'Amélie',	2000,	'Lyon',	'https://upload.wikimedia.org/wikipedia/commons/d/d9/Peugeot_206_Quicksilver_90.jpg',	'2023-11-29 16:17:24.388283',	'2023-11-29 16:17:24.388283',	2),
(7,	'Opel Corsa',	'Voiture Opel Corsa en bon état.',	'Lucie',	1000,	'Bordeaux',	'https://images.caradisiac.com/images/7/5/8/4/177584/S0-nouvelle-opel-corsa-prix-des-14-600-eur-597846.jpg',	'2023-11-29 16:17:45.07115',	'2023-11-29 16:17:45.07115',	2),
(2,	'T-shirt hello world',	'T-shirt neuf avec l inscription "Hello World".',	'Pierre',	9.99,	'Lyon',	'https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C51HI1GTgXHL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY780_.png',	'2023-11-29 16:15:59.350247',	'2023-11-29 16:15:59.350247',	3),
(3,	'Chaussettes Wild Code School',	'Chaussettes aux couleurs de Wild Code School.',	'Anna',	4.49,	'Paris',	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGo1K2m8-khBoKWm8gBvlYvzeQl1_FbTqIfexxRNeMGgbTroRIzUVhIbzBswnFq1Luns&usqp=CAU',	'2023-11-29 16:16:33.666671',	'2023-11-29 16:16:33.666671',	3),
(8,	'Jeu de cartes Pokémon collector',	'Jeu de cartes Pokémon en édition collector.',	'Jean',	350,	'Lyon',	'https://m.media-amazon.com/images/I/71+J7LqrciL._AC_UF894,1000_QL80_.jpg',	'2023-11-29 16:18:01.979069',	'2023-11-29 16:18:01.979069',	7),
(11,	'TV QLED PHILIPS 55PML9008 Mini Led Ambilight',	'Les points clés
139 cm (55") - 4K 100Hz
LxHxP (sans pied) : 123.1 x 72.1 x 8.2 cm
HDMI 2.1 : x2 - HDMI 2.0 : x2 - USB : x2
Son : 40 Watts - Pieds sur les côtés
Le + : Image et son cinématographiques grâce au Dolby Vision et Dolby Atmos.',	'Alexandre78R',	999,	'fr',	'https://boulanger.scene7.com/is/image/Boulanger/8718863038024_h_f_l_0?wid=500&hei=500',	'2023-11-29 17:02:09.050859',	'2023-11-29 17:02:09.050859',	5);

DROP TABLE IF EXISTS "ad_tags_tag";
CREATE TABLE "public"."ad_tags_tag" (
    "adId" integer NOT NULL,
    "tagId" integer NOT NULL,
    CONSTRAINT "PK_95b9f8a69d8090f2ec1abeb646c" PRIMARY KEY ("adId", "tagId")
) WITH (oids = false);

CREATE INDEX "IDX_88c37707a52c0b2a820a8d4ebc" ON "public"."ad_tags_tag" USING btree ("adId");

CREATE INDEX "IDX_cd22b65edffb7dd9c8f1a79052" ON "public"."ad_tags_tag" USING btree ("tagId");


DROP TABLE IF EXISTS "category";
DROP SEQUENCE IF EXISTS category_id_seq;
CREATE SEQUENCE category_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."category" (
    "id" integer DEFAULT nextval('category_id_seq') NOT NULL,
    "name" character varying NOT NULL,
    CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "tag";
DROP SEQUENCE IF EXISTS tag_id_seq;
CREATE SEQUENCE tag_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."tag" (
    "id" integer DEFAULT nextval('tag_id_seq') NOT NULL,
    "name" character varying NOT NULL,
    CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id")
) WITH (oids = false);


ALTER TABLE ONLY "public"."ad" ADD CONSTRAINT "FK_c418809c6e081f861cefe495668" FOREIGN KEY ("categoryId") REFERENCES category(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."ad_tags_tag" ADD CONSTRAINT "FK_88c37707a52c0b2a820a8d4ebc4" FOREIGN KEY ("adId") REFERENCES ad(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."ad_tags_tag" ADD CONSTRAINT "FK_cd22b65edffb7dd9c8f1a790527" FOREIGN KEY ("tagId") REFERENCES tag(id) NOT DEFERRABLE;

-- 2023-11-29 17:04:12.560599+00