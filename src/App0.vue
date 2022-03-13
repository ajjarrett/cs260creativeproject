<template>
  <div id="app">
    <div id="menubar">
      <img class="logo" src="/images/protein.png">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/modules">Modules</router-link> |
        <router-link to="/biography">About Me</router-link> |
        <router-link to="/contact">Contact Us</router-link>
      </nav>

      <h1>Mr. Jarrett's Research Lab</h1>


    </div>



    <!-- Needed for Bootstrap -->

    <!-- #0066ff  Previous blue color -->
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color:#B0A89E;"> <!-- Can change navbar color here -->
      <a class="navbar-brand" href="/"><img class="logo" src="/images/protein.png"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>


      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <!-- NAVBAR PAGES -->
          <router-link to="/">Home</router-link> |
          <router-link to="/modules">Tutorials</router-link> |
          <router-link to="/biography">About Me</router-link> |
          <router-link to="/contact">Contact Us</router-link>
          <a class="nav-item nav-link" href="/">Home</a>
          <a class="nav-item nav-link" href="/pages/modules.html">Tutorials<span class="sr-only"></span></a>
          <a class="nav-item nav-link" href="/pages/biography.html">About Me</a>
          <a class="nav-item nav-link" href="/pages/contact.html">Contact Us</a>
        </div>
      </div>
    </nav>
    <!-- Done with Bootstrap Section -->



    <router-view/>

    <div class="footer">
      <br />
      <a href="https://github.com/ajjarrett/cs260creativeproject">View GitHub Repository</a>
      <br />
      <br />
    </div>
  </div>
</template>









<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}








#menubar {
  background-color:#B0A89E;
}


img{
  max-width: 15%;
}

#header {
  background-color: #B0A89E;  /*tan*/
	padding: 10px;
}


/*logo in header*/
#header img {
	max-width: 100px;
	height: auto;
}



#header h1 {
	font-weight: bolder;
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






.footer {
	/* background-color: #AD896E; light brown*/
  background-color: #B0A89E;  /*tan*/
  width: 100%;
  padding: 10px;
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
