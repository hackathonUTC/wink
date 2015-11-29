var text = "{\"id\": 4,\"login\": \"tgalopin\",\"firstname\": \"Titouan\",\"lastname\": \"Galopin\",\"branch\": \"GI\"\"gender\": \"m\",\"language\": \"fr\",\"relationshipStatus\": \"single\",\"birthday\": \"1994-12-01\",\"semester\": 1,\"typeOfRelation\": \"cdi\",\"orientation\": \"h\",\"picture": \"http://confagile.utc.fr/\",\"origin\": {\"id\": 4,\"name\": \"France\"},\"associations\": [{\"id\": 5,\"name\": \"Polar\"},{\"id\": 6,\"name\": \"BDE\"}],\"sports\": [{\"id\": 5,\"name\": \"Badminton\"},\"id\": 6,\"name\": \"Handball\"}],\"hobbies\": [{\"id\": 6,\"name\": \"Cinéma\"},{\"id\": 7,\"name\": \"Photographie\"}],\"uvs\": [{\"id\": 6,\"name\": \"CM11-TP3\"},{\"id\": 7,\"name\": \"CM11-TD7\"},]}";

var jsonobj = JSON.parse(text);
alert(jsonobj.id);
