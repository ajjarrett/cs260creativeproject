//https://github.com/PDBeurope/pdbe-api-training/blob/master/api_tutorials/1_basics.ipynb
//https://www.ebi.ac.uk/pdbe/pdbe-rest-api

document.getElementById("searchSubmit").addEventListener("click", function(event) {
	event.preventDefault();
	const value = document.getElementById("searchInput").value;
	if (value === "")
		return;
	console.log(value);
	let value_lower = value.toLowerCase()
	let zero = "0"

	const url = "https://www.ebi.ac.uk/pdbe/api/pdb/entry/summary/" + value ;
	console.log(url);
	fetch(url)
		.then(function(response) {
			return response.json();
		}).then(function(json) {
			//console.log(json);


			console.log(json);
			console.log(json.value_lower.zero.experimental_method);
			console.log(json.value_lower.zero.number_of_entities);
			console.log(json.value_lower.zero.number_of_entities.polypeptide);
			//console.log(json);


			let results = "";
			results += '<h2>Search results for ' + value + " PDB entry</h2>";

			results += '<p>Experimental method: ' + json.value_lower.zero.experimental_method +'</p>';

			results += '<p>Protein chains included: ' + json.value_lower.zero.number_of_entities.polypeptide +'</p>';
			results += '<p>DNA chains included: ' + json.value_lower.number_of_entities.dna +'</p>';
			results += '<p>RNA chains included: ' + json.number_of_entities.rna +'</p>';
			results += '<p>Ligands included: ' + json.number_of_entities.ligand +'</p>';
			results += '<p>Sugars included: ' + json.number_of_entities.sugar +'</p>';
			results += '<p>Water included: ' + json.number_of_entities.water +'</p>';
			results += '<p>Quaternary structure: ' + json.assemblies.name +'</p>';

			document.getElementById("searchResults").innerHTML = results;

		});

});
