<template>
	<div class="main">
		<div class="modules">

      <div class="menu">
				<h1>Training Modules</h1>
				<br />
				<br />
				<br />
			</div>



			<div class="grid_container">

				<div class="module_box">
					<div class="box_contents">
						<router-link to="/module1"><p>Module 1: <br/> Scientific Literature</p></router-link>
						<!-- <input type="checkbox" id="completedModule1">
						<label for="completedModule1">Mark Completed</label> -->
						<button v-on:click="markDone()">Mark Done</button>
					</div>
				</div>

				<div class="module_box">
					<div class="box_contents">
						<router-link to="/module2"><p>Module 2: <br/> Command Line</p></router-link>
						<!-- <input type="checkbox" id="completedModule1">
						<label for="completedModule1">Mark Completed</label> -->
						<button v-on:click="markDone()">Mark Done</button>
					</div>
				</div>

				<div class="module_box">
					<div class="box_contents">
						<router-link to="/module3"><p>Module 3: <br/> PDB File Format</p></router-link>
						<!-- <input type="checkbox" id="completedModule1">
						<label for="completedModule1">Mark Completed</label> -->
						<button v-on:click="markDone()">Mark Done</button>
					</div>
				</div>

				<div class="module_box">
					<div class="box_contents">
						<router-link to="/module4"><p>Module 4: <br/> Independent Learning</p></router-link>
						<!-- <input type="checkbox" id="completedModule1">
						<label for="completedModule1">Mark Completed</label> -->
						<button v-on:click="markDone()">Mark Done</button>
					</div>
				</div>

				<div class="module_box">
					<div class="box_contents">
						<router-link to="/module5"><p>Module 5: <br/> Python</p></router-link>
						<!-- <input type="checkbox" id="completedModule1">
						<label for="completedModule1">Mark Completed</label> -->
						<button v-on:click="markDone()">Mark Done</button>
					</div>
				</div>

				<div class="module_box">
					<div class="box_contents">
						<router-link to="/module6"><p>Module 6: <br/> Chimera, PyMOL, VMD</p></router-link>
						<!-- <input type="checkbox" id="completedModule1">
						<label for="completedModule1">Mark Completed</label> -->
						<button v-on:click="markDone()">Mark Done</button>
					</div>
				</div>

				<div class="module_box">
					<div class="box_contents">
						<router-link to="/module7"><p>Module 7: <br/> Molecular Dynamics</p></router-link>
						<!-- <input type="checkbox" id="completedModule1">
						<label for="completedModule1">Mark Completed</label> -->
						<button v-on:click="markDone()">Mark Done</button>
					</div>
				</div>

				<div class="module_box">
					<div class="box_contents">
						<router-link to="/module8"><p>Module 8: <br/> MDAnalysis</p></router-link>
						<!-- <input type="checkbox" id="completedModule1">
						<label for="completedModule1">Mark Completed</label> -->
						<button v-on:click="markDone()">Mark Done</button>
					</div>
				</div>

				<div class="module_box">
					<div class="box_contents">
						<router-link to="/module9"><p>Module 9: <br/> Parameterization</p></router-link>
						<!-- <input type="checkbox" id="completedModule1">
						<label for="completedModule1">Mark Completed</label> -->
						<button v-on:click="markDone()">Mark Done</button>
					</div>
				</div>

				<div class="module_box">
					<div class="box_contents">
						<router-link to="/module10"><p>Module 10: <br/> </p></router-link>
						<!-- <input type="checkbox" id="completedModule1">
						<label for="completedModule1">Mark Completed</label> -->
						<button v-on:click="markDone()">Mark Done</button>
					</div>
				</div>

				<div class="module_box">
					<div class="box_contents">
						<router-link to="/module11"><p>Module 11: <br/> </p></router-link>
						<!-- <input type="checkbox" id="completedModule1">
						<label for="completedModule1">Mark Completed</label> -->
						<button v-on:click="markDone()">Mark Done</button>
					</div>
				</div>

				<div class="module_box">
					<div class="box_contents">
						<router-link to="/module12"><p>Module 12: <br/> </p></router-link>
						<!-- <input type="checkbox" id="completedModule1">
						<label for="completedModule1">Mark Completed</label> -->
						<button v-on:click="markDone()">Mark Done</button>
					</div>
				</div>

				<div class="module_box">
					<div class="box_contents">
						<router-link to="/module13"><p>Module 13: <br/> </p></router-link>
						<!-- <input type="checkbox" id="completedModule1">
						<label for="completedModule1">Mark Completed</label> -->
						<button v-on:click="markDone()">Mark Done</button>
					</div>
				</div>

				<div class="module_box">
					<div class="box_contents">
						<router-link to="/module14"><p>Module 14: <br/> </p></router-link>
						<!-- <input type="checkbox" id="completedModule1">
						<label for="completedModule1">Mark Completed</label> -->
						<button v-on:click="markDone()">Mark Done</button>
					</div>
				</div>

				<div class="module_box">
					<div class="box_contents">
						<router-link to="/module15"><p>Module 15: <br/> </p></router-link>
						<!-- <input type="checkbox" id="completedModule1">
						<label for="completedModule1">Mark Completed</label> -->
						<button v-on:click="markDone()">Mark Done</button>
					</div>
				</div>


			</div>

			<br />
		</div>
  </div>
</template>







<script>

export default {
  name: 'TutorialsView',
  components: {
  }
}
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



.modules {
	background-color: #F0ECEA;  /*off-white*/     /* yellow !important; */
	padding: 20px;
}

.modules h1 {
	font-size: xx-large;
}



.grid_container {
	display: grid;
	grid-template: auto auto auto / 1fr 1fr 1fr;
	grid-column-gap: 10px;
	grid-row-gap: 10px;
}

.module_box {
	display: flex;
	width: 200px;
	height: 200px;
	justify-content: center;
	align-items: center;
	text-align: center;
	border: 5px solid black !important;
	margin: auto;
	background-color: white;
}

.module_box p {
	font-weight: bold;
}




.bodystyle {
  padding: 50px;
  padding-top: 20px;
  margin: 50px;
  margin-top: 20px;
	/* border: 5px solid black; */
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
