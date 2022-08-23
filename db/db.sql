CREATE TABLE product(
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(60),
	brief VARCHAR(255),
	price INT,
	imageUrl VARCHAR(255),
	featured BOOLEAN,
	category VARCHAR(60)
);

INSERT INTO product(title, brief, price, imageUrl, featured, category)

VALUES
("small box", "a small farm box for 1-2 people", 30, "product_biweekly-box.png", 0, 'subscriptions'),
("large box", "a large farm box for 3-4 people", 30, "product_weekly-box.png", 1, 'subscriptions'),
("eggs", "1 dozen farm-fresh chicken eggs", 10, "product_eggs.png", 0, 'subscriptions'),
("lettuce", "big head of green leaf lettuce", 4, "product_green-beans.png", 0, 'produce'),
("green beans", "1 lb fresh-picked green beans", 6, "product_lettuce.png", 0, 'produce'),
("kale", "bunch of lacinato \"dinosaur\" kale", 4, "product_kale.png", 0, 'produce'),
("carrots", "fresh carrot bunch", 4, "product_carrot.png", 1, 'produce'),
("snap peas", "1 lb green snap peas", 4, "product_snap-peas.png", 1, 'produce'),
("corn", "ear of corn (priced each)", 2, "product_corn.png", 0, 'produce'),
("strawberries", "1 pint of strawberries", 5, "product_strawberry.png", 0, 'produce'),
("rhubarb", "bundle of fresh rhubarb", 7, "product_rhubarb.webp", 0, 'produce'),
("nectarines", "1 lb fresh white nectarines", 7, "product_nectarine.png", 0, 'produce'),
("pickles & ferments", "various pickles & fermented produce", 12, "product_pickled-okra.png", 1, 'other'),
("dried peppers", "seasonal variety of dried chiles & peppers", 10, "product_dried-ancho-chiles.png", 0, 'other'),
("black garlic", "head of our housemade black garlic", 5, "product_black-garlic.png", 1, 'other');
