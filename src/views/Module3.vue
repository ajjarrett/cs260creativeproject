<template>
  <div class="home">
		<div class="main">

      <div class="menu">
        <br />
				<h3>Training Module 3: PDB Files</h3>
				<br />
			</div>


      <div class="bodystyle">
        <p><strong>
          One of the key tenets of biology is that structure and function of
          biological molecules are intimately related.
        </strong>
        </p>

        <p>
        When investigating biological molecules, it is very important
          to get an idea of their structure. </p>

        <p>
        The most common file format for storing structural information about
        biological molecules is the Protein Data
        Bank format, abbreviated to PDB.
        Structures of biological molecules can be
        determined using experimental techniques such as x-ray crystallography or
        NMR. This will locate the position of all the atoms in a
        biomolecule and the positions of each atom in three dimensional
        space can be stored.</p>

        <p>
         Each PDB structure has a unique 4-digit code assigned to it when it
         is placed in the worldwide protein data bank database at
         https://www.rcsb.org/ .  This site is a valuable resource
         that contains structural information for
         over 185,000 biological molecules.
        </p>
        <br />
        <hr />
        <br />


        <p> <strong> <em>
        Use the search box below to view important information about any pdb
        entry.</em></strong> </p>

        <p><em> (Hint: if you don't know where to start, guess a few codes
          or try a few of the following pdb codes: 4M7T, 1EDE, 3VNK, 1ALK,
          1N68, 1A4L, 5XH3, 4WFI, etc.) </em> </p>


          <!--
         <form>
           <label>Enter a pdb code search term</label>
           <input id="searchInput" type="text"></input>
           <br/>
           <input id="searchSubmit" type="submit" value="Submit"></input>
         </form> -->

         <br />
         <br />

         <div id="searchResults"></div>


         <br />
         <br />
         <br />
         <br />


      </div>
		</div>
  </div>
</template>








<script>

export default {
  name: 'Module3View',
  components: {
  }
}



/*
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
  				results += '<p><strong>Quaternary structure: </strong>' + json.response.docs[i].all_assembly_form + ' ' + json.response.docs[i].all_assembly_type + "</p>";
  				results += '<p><strong>Enzyme superfamily: </strong> ';
  				for (let j=0; j < json.response.docs[i].cath_homologous_superfamily.length; j++) {
  					results += ' '+ json.response.docs[i].cath_homologous_superfamily[j] + ' ';
  				}
  				results += '</p> ';

  				results += '<p><strong>Ligands included in structure: </strong></p>'
  				if (json.response.docs[i].q_bound_compound_id.length > 0){
  						results += '<div class="bulletsNextTo">';
  						results += '<ul>';
  				}

  				for (let j=0; j < json.response.docs[i].q_bound_compound_id.length; j++) {
  					results += '<li>'+ json.response.docs[i].q_bound_compound_id[j] +'</li>';
  				}

  				if (json.response.docs[i].q_bound_compound_id.length > 0){
  						results += '</ul>';
  						results += '</div>';
  				}

  				results += '<p><strong>Structure Citation doi: </strong>' + json.response.docs[i].citation_doi + "</p>";



  			}

  			document.getElementById("searchResults").innerHTML = results;

  		});

  });*/

</script>
















<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}






.home {

  background-color: #F0ECEA;  /*off-white*/
	padding: 20px;
}

.home h1 {
	font-size: xx-large;
}

.home img {
	max-width: 15%;
	height: auto;
}

.home video {
	max-width: 50%;
	height: auto;
}




.bodystyle {
  padding: 50px;
  padding-top: 20px;
  margin: 50px;
  margin-top: 20px;
	/* border: 5px solid black; */
}




#searchResults {
	border: 2px solid black;
}







@media only screen and (max-width: 600px) {
	.home img {
		width: 50px;
		height: auto;
	}
  .grid_container {
    grid_template: auto / 1fr;
  }
}





</style>
