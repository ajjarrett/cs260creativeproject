<template>
  <div class="home">
		<h2>Contact</h2>
    <br />
		<p>Please contact me on <a href="https://www.linkedin.com/in/austinjarrett/">LinkedIn</a> or <a href="https://github.com/ajjarrett">GitHub</a></p>
    <br />
    <br />
  </div>
</template>



<script>
export default {
  name: 'ContactView',
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
