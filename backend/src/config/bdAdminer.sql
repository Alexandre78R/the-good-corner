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
(9,	'Chaîne hi-fi complète',	'Ensemble complet de chaîne hi-fi en bon état.',	'Jean',	80,	'Paris',	'https://boulanger.scene7.com/is/image/Boulanger/3666638048110_pdm_0?wid=500&hei=500',	'2023-11-29 16:18:20.824038',	'2023-11-29 16:18:20.824038',	10),
(10,	'Macbook',	'Odinateur très puissant pour coder !!!',	'Alexandre',	9999,	'Paris',	'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-config-20220606?wid=820&hei=498&fmt=jpeg&qlt=90&.v=1654122880566',	'2023-11-29 16:18:39.233269',	'2023-11-29 16:18:39.233269',	4),
(13,	'Console NINTENDO Switch Neon Bleue / Rouge',	'Les points clés
Ecran 6,2"
Dock : de chargement
Mémoire interne : 32 Go
Le + : son côté hybride, elle permet de jouer sur un téléviseur ou en format nomade comme une tablette, en mode solo ou multi joueur',	'Alexandre78R',	289.59,	'fr',	'https://boulanger.scene7.com/is/image/Boulanger/0045496453596_h_f_l_0?wid=500&hei=500',	'2023-12-01 08:50:19.307458',	'2023-12-01 08:50:19.307458',	11),
(14,	'Console SONY PS4 Slim 500Go',	'Disque Dur : 500 Go
Processeur graphique standard
1 manette
Le + : Console compacte - Compatible réalité virtuelle',	'Alexandre78R',	299.99,	'fr',	'https://boulanger.scene7.com/is/image/Boulanger/0711719407577_h_f_l_0?wid=500&hei=500',	'2023-12-01 08:51:29.014865',	'2023-12-01 08:51:29.014865',	11),
(15,	'Console SONY PS5 Slim Edition Standard',	'Disque Dur : 1 To - Lecteur Blu-Ray 4K
Graphisme en 8K
Jusqu''à 120 FPS sur les écrans 4K
Avec manette Dual Sense
Le + : Nouveau design et ultra rapide pour une immersion plus poussée',	'Alexandre78R',	549.99,	'fr',	'https://boulanger.scene7.com/is/image/Boulanger/0711719577171_h_f_l_0?wid=500&hei=500',	'2023-12-01 08:52:26.381286',	'2023-12-01 08:52:26.381286',	11),
(16,	'Console MICROSOFT Xbox Series X',	'Disque Dur : 1 To - Disque SSD de 1To
Processeur graphique puissant - Grande fidélité graphique
1 manette - Lecteur Bluray 4K
Temps de chargement réduit
Le + : Une image a couper le souffle en 4K et jusqu''à 120 images/secondes !',	'Alexandre78R',	549.99,	'fr',	'https://boulanger.scene7.com/is/image/Boulanger/0889842640809_h_f_l_0?wid=500&hei=500',	'2023-12-01 08:53:25.755316',	'2023-12-01 08:53:25.755316',	11),
(22,	'Enceinte résidentielle Marshall Stanmore II Noir',	'Autonomie : Alimentation secteur
Puissance sonore : 50 watts RMS
Non étanche
Connectivité : Bluetooth
Le + : Réglage des basses et des aigus',	'Alexandre78R',	249.99,	'fr',	'https://boulanger.scene7.com/is/image/Boulanger/7340055355315_h_f_l_0?&hei=360&resMode=sharp2&op_usm=1.75,0.3,2,0',	'2023-12-01 09:00:19.753803',	'2023-12-01 09:00:19.753803',	10),
(23,	'Enceinte portable JBL Charge 4 noir',	'Les points clés
Autonomie : jusqu''à 20h
Puissance sonore : 30 watts RMS
Etanche jusqu''à 1m
Connectivité : Bluetooth
Le + : JBL Connect + (Connectez plusieurs enceintes entre elles pour augmenter votre puissance)',	'Alexandre78R',	99.99,	'fr',	'https://boulanger.scene7.com/is/image/Boulanger/6925281939990_h_f_l_0?wid=500&hei=500',	'2023-12-01 09:01:08.73676',	'2023-12-01 09:01:08.73676',	10),
(4,	'R5 pour pièces',	'Voiture Renault R5 pour pièces détachées.',	'Patrick',	100,	'Bordeaux',	'https://img.leboncoin.fr/api/v1/lbcpb1/images/02/31/e7/0231e78dfe5b17693b658cc89553792bec923175.jpg?rule=ad-large',	'2023-11-29 16:16:49.107331',	'2023-11-29 16:16:49.107331',	2),
(5,	'DeLorean DMC-12',	'Voiture DeLorean DMC-12, modèle célèbre de Retour vers le futur.',	'Marty',	70000,	'Paris',	'https://upload.wikimedia.org/wikipedia/commons/3/35/DeLorean_DMC-12_%289979%29.jpg',	'2023-11-29 16:17:05.093579',	'2023-11-29 16:17:05.093579',	2),
(6,	'Peugeot 206',	'Voiture d occasion en bon état.',	'Amélie',	2000,	'Lyon',	'https://upload.wikimedia.org/wikipedia/commons/d/d9/Peugeot_206_Quicksilver_90.jpg',	'2023-11-29 16:17:24.388283',	'2023-11-29 16:17:24.388283',	2),
(7,	'Opel Corsa',	'Voiture Opel Corsa en bon état.',	'Lucie',	1000,	'Bordeaux',	'https://images.caradisiac.com/images/7/5/8/4/177584/S0-nouvelle-opel-corsa-prix-des-14-600-eur-597846.jpg',	'2023-11-29 16:17:45.07115',	'2023-11-29 16:17:45.07115',	2),
(24,	'Barre de son Bose TV Speaker',	'Barre de son sans caisson
Son Optimisé - HDMI Arc, Entrée Optique
LxHxP enceinte : 59.3 x 5.6 x 10.2 cm
Le + : Mode dialogue pour une meilleure clarté des voix, design sobre et ultra moderne',	'Alexandre78R',	269.99,	'fr',	'https://boulanger.scene7.com/is/image/Boulanger/0017817808651_h_f_l_0?wid=500&hei=500',	'2023-12-01 09:02:11.316877',	'2023-12-01 09:02:11.316877',	10),
(25,	'PC Gamer ACER PO5-650',	'Processeur : Intel Core i7-13700F
Mémoire vive : 32 Go
Carte graphique : Nvidia Geforce RTX 4070 Ti
Stockage : 1 To
Le + : Processeur intel Core i7 avec 32 Go de mémoire vive et une carte graphique RTX 4070',	'Alexandre78R',	3299,	'fr',	'https://boulanger.scene7.com/is/image/Boulanger/4711121748868_h_f_l_0?wid=500&hei=500',	'2023-12-01 09:04:27.051167',	'2023-12-01 09:04:27.051167',	4),
(8,	'Jeu de cartes Pokémon collector',	'Jeu de cartes Pokémon en édition collector.',	'Jean',	350,	'Lyon',	'https://m.media-amazon.com/images/I/71+J7LqrciL._AC_UF894,1000_QL80_.jpg',	'2023-11-29 16:18:01.979069',	'2023-11-29 16:18:01.979069',	7),
(11,	'TV QLED PHILIPS 55PML9008 Mini Led Ambilight',	'Les points clés
139 cm (55") - 4K 100Hz
LxHxP (sans pied) : 123.1 x 72.1 x 8.2 cm
HDMI 2.1 : x2 - HDMI 2.0 : x2 - USB : x2
Son : 40 Watts - Pieds sur les côtés
Le + : Image et son cinématographiques grâce au Dolby Vision et Dolby Atmos.',	'Alexandre78R',	999,	'fr',	'https://boulanger.scene7.com/is/image/Boulanger/8718863038024_h_f_l_0?wid=500&hei=500',	'2023-11-29 17:02:09.050859',	'2023-11-29 17:02:09.050859',	5),
(17,	'Smartphone Xiaomi 13T conçu avec Leica Noir 256Go',	'Ecran : large 6,6" soit 16,8 cm
Mémoire interne : 256 Go
Capteurs photos : 3 (50 MP en capteur principal)
Mémoire RAM : 8 Go - Processeur : 8 coeurs jusqu''à 3,1 GHz
Le + : Appareil photo professionnel Leica',	'Alexandre78R',	649.99,	'fr',	'https://boulanger.scene7.com/is/image/Boulanger/6941812735664_h_f_l_0?wid=500&hei=500',	'2023-12-01 08:54:41.448958',	'2023-12-01 08:54:41.448958',	6),
(18,	'Smartphone Xiaomi 13T Pro 1To',	NULL,	'Alexandre78R',	999,	'fr',	'https://boulanger.scene7.com/is/image/Boulanger/6941812749258_h_f_l_0?wid=500&hei=500',	'2023-12-01 08:55:52.739036',	'2023-12-01 08:55:52.739036',	6),
(19,	'Casque Bose QC Special Edition ',	'Autonomie totale : jusqu''à 22h
Réduction de bruit active
Englobe l''oreille (circum-aural)
Le + : Coussinets doux sans aucun pli permettant d''exercer une pression minimale sur le crâne',	'Alexandre78R',	199.99,	'fr',	'https://boulanger.scene7.com/is/image/Boulanger/0017817844314_h_f_l_0?wid=500&hei=500',	'2023-12-01 08:57:58.935801',	'2023-12-01 08:57:58.935801',	10),
(20,	'Casque Sony WH-1000XM4 Noir',	'Autonomie totale : jusqu''à 38h - Filaire
Réduction de bruit active
Englobe l''oreille (circum-aural)
Contrôlez la musique, les appels et les assistants vocaux
Le + : Speak-to-chat : la musique se met en pause lorsque vous parlez',	'Alexandre78R',	279.99,	'fr',	'https://boulanger.scene7.com/is/image/Boulanger/4548736112117_h_f_l_0?wid=500&hei=500',	'2023-12-01 08:58:45.205117',	'2023-12-01 08:58:45.205117',	10),
(21,	'Casque Apple AirPods Max Gris Sidéral',	'Autonomie totale : jusqu''à 20h
Réduction de bruit active
Englobe l''oreille (circum-aural)
Contrôlez la musique, les appels et les assistants vocaux',	'Alexandre78R',	579,	'fr',	'https://boulanger.scene7.com/is/image/Boulanger/0194252244968_h_f_l_0?wid=500&hei=500',	'2023-12-01 08:59:30.282228',	'2023-12-01 08:59:30.282228',	10),
(26,	'PC Gamer Acer POX-950',	'Les points clés
Processeur : Intel Core i9-13900KF
Mémoire vive : 16 Go
Carte graphique : Nvidia Geforce RTX 4080
Stockage : 1 To
Le + : Processeur intel Core i9 avec et une carte graphique RTX 4080',	'Alexandre78R',	4499,	'fr',	'https://boulanger.scene7.com/is/image/Boulanger/4711121749810_h_f_l_0?wid=500&hei=500',	'2023-12-01 09:05:19.33508',	'2023-12-01 09:05:19.33508',	NULL),
(27,	'TV QLED Tcl 75C745 2023',	'189 cm (75") - 4K 144Hz
LxHxP (sans pied) : 166.8 x 96.6 x 7.3 cm
HDMI 2.1 : x4 - USB : x1
Son : 2 x 15 Watts - Pied central
Le + : Qualité et fluidité de l''image grâce au Game Master Pro et HDR multi-format',	'Alexandre78R',	1190,	'fr',	'https://boulanger.scene7.com/is/image/Boulanger/5901292519629_h_f_l_0?wid=500&hei=500',	'2023-12-01 09:06:58.797748',	'2023-12-01 09:06:58.797748',	5),
(28,	'TV QLED Tcl Mini LED 98C955 2023',	'248 cm (98") - 4K 144Hz
LxHxP (sans pied) : 217.8 x 125 x 10.3 cm
HDMI 2.1 : x4 - USB : x1
Son : 6 x 10 Watts - Pieds sur les côtés
Le + : Modèle premium QD Mini-LED, images ultra fluides 144Hz et haute luminosité 2000 nits',	'Alexandre78R',	5990,	'fr',	'https://boulanger.scene7.com/is/image/Boulanger/5901292521271_h_f_l_0?wid=500&hei=500',	'2023-12-01 09:07:36.736518',	'2023-12-01 09:07:36.736518',	5),
(29,	'TV LED Philips 55PUS8808 The One Ambilight',	'139 cm (55") - 4K 100Hz
LxHxP (sans pied) : 123.1 x 72 x 8 cm
HDMI 2.1 : x2 - HDMI 2.0 : x2 - USB : x2
Son : 40 Watts Dolby Atmos - Pied central rotatif
Le + : Pied pivotant et ambiance lumineuse Ambilight pour un plus grand confort',	'Alexandre78R',	799,	'fr',	'https://boulanger.scene7.com/is/image/Boulanger/8718863037041_h_f_l_0?wid=500&hei=500',	'2023-12-01 09:08:56.438971',	'2023-12-01 09:08:56.438971',	5),
(30,	'Summoners War SD Figure Vol. 2 Collection Set',	'The stunning and mysterious Giana, the beautiful and brilliant Lapis, the elegant and attractive Verdehile, the enviable and charismatic Hathor, and the exquisite and mystical Woosa.

Meet the Monsters with incredible magic skills.
Your victory will shine brightly.',	'Alexandre78R',	264,	'fr',	'https://com2ustore.com/cdn/shop/files/1_545080f8-de5b-4712-a644-ae5cd168d65b_1800x1800.png?v=1695054163',	'2023-12-01 09:10:48.462495',	'2023-12-01 09:10:48.462495',	8),
(31,	'[Summoners War] Art Book (Single Product)',	'The story of our fans Your gameplay becomes a part of Summoners War''s history.

An official art book containing the history of Summoners War. Explore the unrevealed universe and stories of Summoners War now!',	'Alexandre78R',	35,	'fr',	'https://com2ustore.com/cdn/shop/files/2_c03d2fed-3359-4ab7-a436-3c2b471e9016_1800x1800.png?v=1695045058',	'2023-12-01 09:11:54.884858',	'2023-12-01 09:11:54.884858',	8);

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

-- 2023-12-01 09:12:24.016748+00