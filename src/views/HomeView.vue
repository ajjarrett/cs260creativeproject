<template>
  <div class="home">
    <h1>Welcome</h1>
    <br />
    <p>Mr. Jarrett's Research Lab is focused on making the world a better place through innovative efforts in the field of medicine and technology.</p>
    <p>They accomplish this by pushing the limits of computational biochemistry and computational enzyme design.</p>
    <p>Mr. Jarrett has put together several training modules that are available to everyone to begin developing skills in computational biochemistry.</p>
    <p>Please login to complete the tutorial modules and track your progress!</p>

    <br />
    <video autoplay muted>
      <source src="/images/proteinMoving.mp4" type="video/mp4" />
      <source src="/images/proteinMoving.ogg" type="video/ogg" />
      Your browser does not support the video tag
    </video>

    <br />
  </div>

</template>






<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
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
