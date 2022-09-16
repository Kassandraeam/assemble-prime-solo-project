-- AVAILABILITY --
CREATE TABLE "availability" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"days_id" INT REFERENCES "days",
	"time_id" INT REFERENCES "time"
);

-- DAYS --
CREATE TABLE "days" ("id" SERIAL PRIMARY KEY, "day" VARCHAR (80));

INSERT INTO
	"days" (day)
VALUES
	('Monday'),
	('Tuesday'),
	('Wednesday'),
	('Thursday'),
	('Friday'),
	('Saturday'),
	('Sunday');

-- FRIENDS --
CREATE TABLE "friends" (
	"id" SERIAL PRIMARY KEY,
	"personOne" int REFERENCES "user",
	"personTwo" int REFERENCES "user"
);

INSERT INTO
	"friends" (user_id_1);

-- TIMES --
CREATE TABLE "time" ("id" SERIAL PRIMARY KEY, "time" INT);

INSERT INTO
	"time" (time)
VALUES
	(100),
(200),
(300),
(400),
(500),
(600),
	(700),
(800),
(900),
(1000),
(1100),
(1200),
	(1300),
(1400),
(1500),
(1600),
(1700),
(1800),
	(1900),
(2000),
(2100),
(2200),
(2300),
(2400);

-- USER --
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR (80),
	"password" VARCHAR (80),
	"timezone" VARCHAR (80)
);

-- SHOWS THE DAYS AND TIME OF A SPECIFIC USER -- 
SELECT
	"availability".id,
	"user".id AS "user_id",
	"availability".days_id,
	"availability".time_id
FROM
	"availability"
	JOIN "user" ON "user".id = "availability".user_id
WHERE
	"user".id = 3
GROUP BY
	"availability".id,
	"user".id,
	"availability".days_id,
	"availability".time_id;

--- DROP TABLES HERE ---
DROP TABLE "days";

DROP TABLE "friends";

DROP TABLE "time";

DROP TABLE "user";

DROP TABLE "availability";

-- DROP EVERYTHING AND START AGAIN! --
DROP TABLE "availability";

DROP TABLE "days";

DROP TABLE "time";

DROP TABLE "user";

CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR (80),
	"password" VARCHAR (80),
	"timezone" VARCHAR (80)
);

CREATE TABLE "days" ("id" SERIAL PRIMARY KEY, "day" VARCHAR (80));

INSERT INTO
	"days" (day)
VALUES
	('Monday'),
	('Tuesday'),
	('Wednesday'),
	('Thursday'),
	('Friday'),
	('Saturday'),
	('Sunday');

CREATE TABLE "time" (
	"id" SERIAL PRIMARY KEY,
	"time" INT,
	"hour" VARCHAR (80)
);

INSERT INTO
	"time" ("time", "hour")
VALUES
	(100, '1:00AM'),
	(200, '2:00AM'),
	(300, '3:00AM'),
	(400, '4:00AM'),
	(500, '5:00AM'),
	(600, '6:00AM'),
	(700, '7:00AM'),
	(800, '8:00AM'),
	(900, '9:00AM'),
	(1000, '10:00AM'),
	(1100, '11:00AM'),
	(1200, '12:00PM'),
	(1300, '1:00PM'),
	(1400, '2:00PM'),
	(1500, '3:00PM'),
	(1600, '4:00PM'),
	(1700, '5:00PM'),
	(1800, '6:00PM'),
	(1900, '7:00PM'),
	(2000, '8:00PM'),
	(2100, '9:00PM'),
	(2200, '10:00PM'),
	(2300, '11:00PM'),
	(2400, '12:00AM');

;

CREATE TABLE "availability" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"days_id" INT REFERENCES "days",
	"time_id" INT REFERENCES "time"
);

------------ BRUHHHHHH -------------
-- GOAL: Get available times in here as well?
-- Shows the available days
-- working on this with liz and kris
SELECT
	"user".id,
	"user".username,
	"user".timezone,
	array_agg("availability".days_id) as "availableDays",
	"days".day,
	"time".hour
FROM
	"user"
	JOIN "availability" ON "user".id = "availability".user_id
	JOIN "days" ON "days".id = "availability".days_id
	JOIN "time" ON "time".id = "availability".time_id
GROUP BY
	"user".id,
	"user".username,
	"user".timezone,
	"days".day,
	"time".hour;

------------ BRUHHHHHH -------------
"availability".id,
"availability".time_id,
"days".day,
"time".hour;

----- REALLLLLY BAD SCRATCH WORK -----
-- Shows the available times by user
SELECT
	"user".id,
	"user".username,
	"user".timezone,
	array_agg("availability".time_id) "availableTimes" -- SELECT, shows the columns we wanna see.
FROM
	"user" -- FROM determines the table from which we're starting?
	JOIN "availability" ON "user".id = "availability".user_id -- We want info from avail table too, so this is how we 																										  join them
GROUP BY
	"user".id,
	"user".username,
	"user".timezone -- Don't know why we group them wihtout that array_agg.
;

-- FOR EACH USER, AT DAY_ID = 1, AGGREGATE THE TIMES THEY HAVE AVAILABLE.
-- I want to see all the times that I have available on Monday.
SELECT
	"user".id,
	"user".username,
	"availability".days_id AS "availableDays",
	"availability".time_id AS "availableTimes"
FROM
	"user"
	JOIN "availability" ON "user".id = "availability".user_id;

;

-- this is it omg --
SELECT
	array_agg("availability".time_id) AS "availableTimes",
	"user".id,
	"user".username
FROM
	"availability"
	JOIN "user" ON "user".id = "availability".user_id
WHERE
	"availability".days_id = 4
GROUP BY
	"user".username,
	"user".id;

-- BETTER VERSION --
SELECT
	"user".id,
	"user".username,
	"days".day,
	"days".id,
	array_agg("availability".time_id) AS "availableTimes"
FROM
	"availability"
	JOIN "user" ON "user".id = "availability".user_id
	JOIN "days" ON "days".id = "availability".days_id
WHERE
	"availability".days_id = 1
GROUP BY
	"user".id,
	"user".username,
	"days".id,
	"days".day;
-- BETTER VERSION --
	
	
	
-- GOAL: Get available times in here as well?
-- Shows the available days
-- working on this with liz and kris
SELECT
	"user".id,
	"user".username,
	"user".timezone,
	array_agg("availability".days_id) "availableDays"
FROM
	"user"
	JOIN "availability" ON "user".id = "availability".user_id
GROUP BY
	"user".id,
	"user".username,
	"user".timezone;

-- THIS IS THE ONE JUSTIN HELPED ME WITH SO MONDAY DOESN'T APPEAR AS 1 -- 
SELECT
	"availability".id,
	"user".id AS "user_id",
	"availability".days_id,
	"availability".time_id,
	"user".username as "username",
	"days".day,
	"time".hour
FROM
	"availability"
	JOIN "user" ON "user".id = "availability".user_id
	JOIN "days" ON "days".id = "availability".days_id
	JOIN "time" ON "time".id = "availability".time_id
WHERE
	"user_id" = 2
GROUP BY
	"availability".id,
	"user".id,
	"availability".days_id,
	"availability".time_id,
	"user".username,
	"days".day,
	"time".time,
	"time".hour;

--- I only want the time_id column from the availability table, where day_id = 1, and it returns the time_id.
SELECT
	"availability".user_id,
	"availability".days_id,
	"availability".time_id
FROM
	"availability"
WHERE
	"availability".day_id = 1
GROUP BY
	"availability".user_id,
	"availability".time_id;

SELECT
	"user".id as "USER",
	"availability".days_id,
	"availability".time_id -- Rows I want to see
FROM
	"availability" -- Which table I'm hitting
	JOIN "user" ON "user".id = "availability".user_id -- Join the user table where user.id is equal to avail.user_id. This means that I'm saying person 1, Kas is the same user on the avail table?
WHERE
	"user".id = 1 -- ^ continued.
GROUP BY
	"user".id,
	"availability".days_id,
	"availability".time_id -- Need this when aggregating.
;

SELECT
	"availability".days_id
FROM
	"availability"
WHERE
	"availability".days_id = 1
GROUP BY
	"availability".days_id;

SELECT
	user_id,
	day_id,
	time_id
FROM
	"availability"
GROUP BY
	user_id,
	day_id
HAVING
	COUNT(*) > 1 time_id
HAVING
	COUNT(*) > 1;

SELECT
	* "availability"
FROM
	availability
WHERE
	availability.time_id = availability.time_id;

SELECT
	supplier_id
FROM
	suppliers
INTERSECT
SELECT
	supplier_id
FROM
	orders;

SELECT
	days_id,
	time_id,
	COUNT(*) AS QTY
FROM
	"availability"
GROUP BY
	days_id,
	time_id
HAVING
	COUNT(*) > 1;

SELECT
	GeekRank,
	COUNT(GeekID) AS DuplicateRanks
FROM
	Geeks
GROUP BY
	GeekRank
HAVING
	COUNT(GeekRank) > 1;

SELECT
	"availability".user_id,
FROM
	"availability"
INTERSECT
SELECT
	"availability".time_id
FROM
	"availability";

SELECT
	"user".id,
	"user".username,
	"user".timezone
FROM
	"user";

UPDATE
	"availability"
SET
	"timezone" = $ 1
WHERE
	"id" = $ 2;

UPDATE
	"user"
SET
	"timezone" = 'UTC+19'
WHERE
	"id" = 1;

DELETE FROM
	"availability"
WHERE
	"id" = 1;

-- THIS IS THE ONE JUSTIN HELPED ME WITH SO MONDAY DOESN'T APPEAR AS 1 -- 
SELECT
	"availability".id,
	"user".id AS "user_id",
	"availability".days_id,
	"availability".time_id,
	"user".username as "username",
	"days".day,
	"time".hour
FROM
	"availability"
	JOIN "user" ON "user".id = "availability".user_id
	JOIN "days" ON "days".id = "availability".days_id
	JOIN "time" ON "time".id = "availability".time_id
WHERE
	"user_id" = 2
GROUP BY
	"availability".id,
	"user".id,
	"availability".days_id,
	"availability".time_id,
	"user".username,
	"days".day,
	"time".time,
	"time".hour;

SELECT
	"user".id,
	"availability".days_id,
	"availability".time_id
FROM
	"availability"
	JOIN "user" ON "user".id = "availability".user_id
WHERE
	"user".id = 1
GROUP BY
	"user".id,
	"availability".days_id,
	"availability".time_id;

-- select and group by needs to be the same shit.
-- from and join are just the names of the tables themselves.
-- ALWAYS JOIN ON IDs
-- 
INSERT INTO
	"user" (username, password, timezone)
VALUES
	('kas', 'test', 'UTC-5') RETURNING id;

CREATE TABLE "available" (
	"id" SERIAL PRIMARY KEY,
	"user" int,
	-- references the primary id from "user" table.
	"day" varchar(80),
	-- references the primary id from the "days" table.
	"time" int -- references the primary id from the "time" table.
);

-- maybe I should make a junction table between days and time first?
-- || id || user || day || time || 
SELECT
	days.id,
	days.day
FROM
	"days"
	INNER JOIN "time" ON "days".id = "time".id;

CREATE TABLE "movies_genres" (
	"id" SERIAL PRIMARY KEY,
	"movie_id" INT REFERENCES "movies" NOT NULL,
	"genre_id" INT REFERENCES "genres" NOT NULL
);

INSERT INTO
	"availability"("user_id", "days_id", "time_id")
VALUES
($ 1, $ 2, $ 3) RETURNING "id",
	"user_id",
	"days_id",
	"time_id";

INSERT INTO
	"availability"("user_id", "days_id", "time_id")
VALUES
(1, 2, 3) RETURNING "id",
	"user_id",
	"days_id",
	"time_id";

-- returning means what columns will show.