CREATE TABLE "gallery" (
"id" SERIAL PRIMARY KEY,
"path" VARCHAR(100) NOT NULL,
"description" VARCHAR(200),
"likes" INTEGER);

INSERT INTO "gallery" ("path", "description", "likes")
VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', '0'), ('images/panda.jpg','Photo of a panda eating bamboo.', '0'), ('images/minons.jpg', 'Photo of minons', '0');

SELECT * FROM "gallery"