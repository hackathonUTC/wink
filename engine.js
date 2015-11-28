var content = require("./representation");

/*
	A revoir !!!



*/

(function poincarre(tab)
	/*var len = tab.length;

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
	*/
	return 0.5;
)
(function getTempMachingLevel( criteriaList, profiletList, n)
	var tab[];
	for(var c in criteriaList){
		for(var p in profiletList){
			if(c == p){
				tab.push(n);
			}
		}
	}
	return poincarre(tab);
)
(function getMatchingLevel(content) { 
	/*
		Return -1 if it can't match
	*/
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
				case "birthday":
					var range = criteria[criteriaKey]
					var lowerBound = parseInt(str.slice(0,4));
					var upperBound = parseInt(str.slice(5,9));

					if((profile[profileKey]<lowerBound) || (profile[profileKey]>upperBound)){
						return -1;
					}
				case "sport":
					finalValues.push(getTempMachingLevel(criterias[criteriaKey], profile[profileKey]));
					break;
				case "association":
					finalValues.push(getTempMachingLevel(criterias[criteriaKey], profile[profileKey]));
					break;
				case "hobby":
					finalValues.push(getTempMachingLevel(criterias[criteriaKey], profile[profileKey]));
					break;
				}break;
			}
		}
	}
)

//console.log(eval(profile));