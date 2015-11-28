var content = require("./representation");
<<<<<<< HEAD

(function poincarre(tab)
	var len = tab.length;

	var somme1 = 0;
	var somme2 = 0;
	var prod;
	var i;
	var j;
	var coeff;
	for(k=1; k<=len; i++){
		prod = 1;
		coeff = Math.pow(-1, i-1);
		for(i=1; i<=k; j++){
			for(j=1; j<=k; j++){
				prod *= tab[j-1];
			}
			somme2 += prod;		
		}
		somme1 += somme2;
	}
	return somme1;
)
(function getMatchingLevel(content) {
	var profile = content[0];
	var criterias = content[1];

	var finalValues = []

	for (var criteriaKey in criterias){
		for(var profileKey in profile){
			switch(criteriaKey){
				case "gender":
					if(criterias[criteriaKey]!=profile[profileKey]){
						return -1;
					}
				case "semester":
					if(criterias[criteriaKey]==profile[profileKey]){
						finalValues.push(0.9)
					}
					else{
						finalValues.push(0.1)
					}
					break;
				case "branch":
					if(criterias[criteriaKey]==profile[profileKey]){
						finalValues.push(0.8)
					}
					else{
						finalValues.push(0.2)
					}
					break;
				case "origin":
					if(criterias[criteriaKey]!=profile[profileKey]){
						return -1;
					}
				case "searchRelation":
					if(criterias[criteriaKey]!=profile[profileKey]){
						return -1;
					}
				case "sport"


				}break;
			}
		}
	}
)

//console.log(eval(profile));