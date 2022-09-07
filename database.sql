
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );

-- AVAILABILITY --
CREATE TABLE "availability" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" NOT NULL,
	"days_id" INT REFERENCES "days" NOT NULL,
	"time_id" INT REFERENCES "time" NOT NULL
);

-- DAYS --
CREATE TABLE "days" (
	"id" SERIAL PRIMARY KEY,
	"day" VARCHAR (80)
)
;
INSERT INTO "days" (day)
VALUES 
('Monday'),
('Tuesday'),
('Wednesday'),
('Thursday'),
('Friday'),
('Saturday'),
('Sunday')
;


-- FRIENDS --
CREATE TABLE "friends" (
	"id" SERIAL PRIMARY KEY,
	"user_id_1" int,
	"user_id_2" int
);


-- TIMES --
CREATE TABLE "time" (
	"id" SERIAL PRIMARY KEY,
	"time" INT
)
;

INSERT INTO "time" (time)
VALUES 
(100),(200),(300),(400),(500),(600),
(700),(800),(900),(1000),(1100),(1200),
(1300),(1400),(1500),(1600),(1700),(1800),
(1900),(2000),(2100),(2200),(2300),(2400)
;

-- USER --
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR (80),
	"password" VARCHAR (80),
	"timezone" VARCHAR (80)	
)
;

--- DROP TABLES HERE ---

DROP TABLE "days";
DROP TABLE "friends";
DROP TABLE "time";
DROP TABLE "user";
DROP TABLE "availability";











----- REALLLLLY BAD SCRATCH WORK -----

SELECT * FROM availability;

INSERT INTO "user" (username, password, timezone)
VALUES ('kas', 'test', 'UTC-5') RETURNING id;

CREATE TABLE "available" (
	"id" SERIAL PRIMARY KEY,
	"user" int, 				-- references the primary id from "user" table.
	"day" varchar(80),          -- references the primary id from the "days" table.
	"time" int                  -- references the primary id from the "time" table.
);

-- maybe I should make a junction table between days and time first?
-- || id || user || day || time || 
SELECT days.id, days.day
FROM "days"
INNER JOIN "time" ON "days".id="time".id
;



CREATE TABLE "movies_genres" (
  "id" SERIAL PRIMARY KEY,
  "movie_id" INT REFERENCES "movies" NOT NULL,
  "genre_id" INT REFERENCES "genres" NOT NULL
);