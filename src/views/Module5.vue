<template>
<div class="home">

  <div class="main">
    <div class="modules">
      <div class="menu">
        <br />
        <h3>Training Module 5: Python</h3>
        <br />
      </div>

      <div class="bodystyle">


        <p>
          It can be nice to use a "notebook" that allows you to separate your
          code into separate cells and run each cell separately.  One nice
          program that allows you to do this is Jupyter Notebook.
        </p>

        <p>
          To install jupyter on Windows, see this link: https://www.geeksforgeeks.org/how-to-install-jupyter-notebook-in-windows/
        </p>

        <ul>
          <li>YouTube</li>
          <li>Coursera</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>






<script>

export default {
  name: 'Module5View',
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
