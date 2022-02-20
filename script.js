//https://github.com/PDBeurope/pdbe-api-training/blob/master/api_tutorials/1_basics.ipynb
//https://www.ebi.ac.uk/pdbe/pdbe-rest-api
//Possibly useful: https://www.youtube.com/watch?v=sv4dgfDjjUk

document.getElementById("searchSubmit").addEventListener("click", function(event) {
	event.preventDefault();
	const value = document.getElementById("searchInput").value;
	if (value === "")
		return;
	console.log(value);
	let value_lower = value.toLowerCase()

	//const url = "https://www.ebi.ac.uk/pdbe/api/pdb/entry/summary/" + value ;
	const url = "https://www.ebi.ac.uk/pdbe/search/pdb/select?q=" + value + "&wt=json";

	console.log(url);
	fetch(url)
		.then(function(response) {
			return response.json();
		}).then(function(json) {
			console.log(json);


			let results = "";
			results += '<h3>Search results for ' + value + " PDB entry</h3>";

			for (let i=0; i < json.response.docs.length; i++) {

				//results += i;
				results += '<p><strong>Name: </strong>' + json.response.docs[i].q_bound_enzyme_name + "</p>";
				results += '<p><strong>Biomolecule class: </strong>' + json.response.docs[i].all_assembly_composition + "</p>";
				results += '<p><strong>Experimental method: </strong>' + json.response.docs[i].q_experimental_method + "</p>";
				results += '<p><strong>Quaternary structure: </strong>' json.response.docs[i].all_assembly_form + json.response.docs[i].all_assembly_type + "</p>";
				results += '<p><strong>Enzyme superfamily: </strong>' + json.response.docs[i].assembly_type + "</p>";
				for (let j=0; j < json.response.docs[i].cath_homologous_superfamily.length; j++) {
					results += '<p>'+ json.response.docs[i].cath_homologous_superfamily[j] +'</li>';
				}

				results += '<p><strong>Ligands included in structure: </strong></p>'
				if (json.response.docs[i].q_bound_compound_id.length){
						results += '<ul>';
				}
				for (let j=0; j < json.response.docs[i].q_bound_compound_id.length; j++) {
					results += '<li>'+ json.response.docs[i].q_bound_compound_id[j] +'</li>';
				}
				if (json.response.docs[i].q_bound_compound_id.length){
						results += '</ul>';
				}

				results += '<p><strong>Structure Citation doi: </strong>' + json.response.docs[i].citation_doi + "</p>";




			}





			//results += '<p>Experimental method: ' + json.value_lower.experimental_method +'</p>';
			//results += '<p>Protein chains included: ' + json.value_lower.zero.number_of_entities.polypeptide +'</p>';
			//results += '<p>DNA chains included: ' + json.value_lower.number_of_entities.dna +'</p>';
			//results += '<p>RNA chains included: ' + json.number_of_entities.rna +'</p>';
			//results += '<p>Ligands included: ' + json.number_of_entities.ligand +'</p>';
			//results += '<p>Sugars included: ' + json.number_of_entities.sugar +'</p>';
			//results += '<p>Water included: ' + json.number_of_entities.water +'</p>';
			//results += '<p>Quaternary structure: ' + json.assemblies.name +'</p>';

			document.getElementById("searchResults").innerHTML = results;

		});

});
