CREATE TABLE origins (
	origin_id 	SERIAL 	NOT NULL PRIMARY KEY,
	name		VARCHAR(50) NOT NULL
);


CREATE TABLE users (
	user_id				VARCHAR(8)	NOT NULL PRIMARY KEY,
	firstname			VARCHAR(50),
	lastname			VARCHAR(50),
	branch				VARCHAR(5),
	gender				VARCHAR(1) 	CHECK (gender IN('m', 'f', 'a')),
	language			VARCHAR(20),
	relationshipStatus	VARCHAR(20)	CHECK (relationshipStatus IN ('single','married','in a relationship', 'complicated')) ,
	birthday			DATE,
	semester			INTEGER,
	typeOfRelation		VARCHAR(6)	CHECK (typeOfRelation IN ('cdi', 'cdd', 'trial')),
	sexualPref		 	VARCHAR(1)	CHECK (sexualPref IN ('m', 'f', 'a')),
	picture				VARCHAR(100),
	origin_id			INTEGER	REFERENCES origins(origin_id)
);


CREATE TABLE tokens (
	user_id		VARCHAR(8) 	NOT NULL REFERENCES users(user_id),
	token		VARCHAR(50)	NOT NULL,
	expire_at	DATE		NOT NULL
);

CREATE TABLE user_swipe (
	userFrom_id	VARCHAR(8)	NOT NULL REFERENCES users(user_id),
	userTo_id	VARCHAR(8)	NOT NULL REFERENCES users(user_id),
	type	 	CHAR(1) NOT NULL CHECK (type IN ('l','r'))
);

CREATE TABLE hobbies (
	hobby_id	SERIAL 	NOT NULL PRIMARY KEY,
	name 		VARCHAR(50) NOT NULL
);
CREATE TABLE user_hobby (
	user_id 	VARCHAR(8) NOT NULL REFERENCES users(user_id),
	hobby_id	INTEGER NOT NULL REFERENCES hobbies(hobby_id)
);

CREATE TABLE organizations (
	organization_id	SERIAL	 	NOT NULL PRIMARY KEY,
	name 			VARCHAR(50) NOT NULL
);
CREATE TABLE user_organization (
	user_id			VARCHAR(8) NOT NULL REFERENCES users(user_id),
	organization_id	INTEGER NOT NULL REFERENCES organizations(organization_id)
);

CREATE TABLE sports (
	sport_id	SERIAL	 	NOT NULL PRIMARY KEY,
	name 		VARCHAR(50) NOT NULL
);
CREATE TABLE user_sport (
	user_id		VARCHAR(8) NOT NULL REFERENCES users(user_id),
	sport_id 	INTEGER NOT NULL REFERENCES organizations(organization_id)
);


CREATE TABLE courses (
	course_id	SERIAL	 	NOT NULL PRIMARY KEY,
	name 		VARCHAR(50) NOT NULL
);
CREATE TABLE user_course (
	user_id 	VARCHAR(8) NOT NULL REFERENCES users(user_id),
	course_id	INTEGER NOT NULL REFERENCES courses(course_id)
);
