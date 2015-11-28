CREATE TABLE user (
	user_id				INTEGER		NOT NULL PRIMARY KEY,
	login				VARCHAR(8)	NOT NULL,
	firstname			VARCHAR(50),
	lastname			VARCHAR(50),
	branch				VARCHAR(5),
	gender				CHAR(1) 	CHECK (gender IN('m', 'f', 'a')),
	language			VARCHAR(20),
	relationshipStatus	VARCHAR(20)	CHECK (relationshipStatus IN ('single','married','in a relationship', 'complicated')) ,
	birthday			DATE,
	semester			INTEGER,
	typeOfRelation		VARCHAR(6)	CHECK (typeOfRelation IN ('cdi', 'cdd', 'trial'))
	orientation		 	VARCHAR(6)		CHECK (orientation IN ('m', 'f', 'a')),
	picture				VARCHAR(100),
	origin_id			INTEGER	FOREIGN KEY REFERENCES origin(origin_id)
);


CREATE TABLE origin (
	origin_id 	INTEGER 	NOT NULL PRIMARY KEY,
	name		VARCHAR(50) NOT NULL
)


CREATE TABLE hobby (
	hobby_id	INTEGER 	NOT NULL PRIMARY KEY,
	name 		VARCHAR(50) NOT NULL
)
CREATE TABLE user_hobby (
	user_id 	INTEGER NOT NULL FOREIGN KEY REFERENCES user(user_id),
	hobby_id	INTEGER NOT NULL FOREIGN KEY REFERENCES hobby(hobby_id)
)

CREATE TABLE organization (
	organization_id	INTEGER 	NOT NULL PRIMARY KEY (organization_id),
	name 			VARCHAR(50) NOT NULL
)
CREATE TABLE user_organization (
	user_id			INTEGER NOT NULL FOREIGN KEY REFERENCES user(user_id),
	organization_id	INTEGER NOT NULL FOREIGN KEY REFERENCES organization(organization_id)
)

CREATE TABLE sport (
	sport_id	INTEGER 	NOT NULL PRIMARY KEY (sport_id),
	name 		VARCHAR(50) NOT NULL
)
CREATE TABLE user_sport (
	user_id		INTEGER NOT NULL FOREIGN KEY REFERENCES user(user_id),
	sport_id 	INTEGER NOT NULL FOREIGN KEY REFERENCES organization(organization_id)
)


CREATE TABLE course (
	course_id	INTEGER 	NOT NULL PRIMARY KEY,
	name 		VARCHAR(50) NOT NULL
)
CREATE TABLE user_course (
	user_id 	INTEGER NOT NULL FOREIGN KEY REFERENCES user(user_id),
	course_id	INTEGER NOT NULL FOREIGN KEY REFERENCES course(course_id)
)
