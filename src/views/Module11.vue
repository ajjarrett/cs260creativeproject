<template>
  <div class="home">
    <div class="main">
      <div class="modules">
        <div class="menu">
          <br />
          <h3>Training Module 11:</h3>
          <br />
        </div>


        <p>BEING AN INDEPENDENT LEARNER</p>


      </div>
    </div>
  </div>
</template>







<script>
export default {
  name: 'Module11View',
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
