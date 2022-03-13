<template>
  <div class="home">
    <h1>About</h1>

    <div class="bodystyle">

      <p><em>Allow me to introduce myself.</em> I am an avid
      adventurer, traveler, and learner. I am constantly seeking to expand
      my understanding of the world and to develop new skills. I have tried
      to become proficient in a wide range of areas. I will graduate next
      year with specialties in physics, biology, mathematics, chemistry, and
      computer science. I have worked in research and published several
      articles in the fields of biophysics and computational biochemistry.
      I have also worked in teaching and have tutored in various subjects
      and worked as a middle school Spanish teacher for almost 2 years.
      If you need help in any of these areas, I'd be happy to assist you.</p>
      <br />

      <img src="/images/Austin_profile.jpg" width='200'/>
      <br />
      <br />
      <hr />
      <br />

      <h2>Research Interests</h2>
      <br />
      <p>I enjoy doing research in computational chemistry and biophysics.
      I enjoy using a wide diverse skills and knowledge to tackle problems
      in new ways. I am currently leading a research project to investigate
      the efficacy of different computational tools for enzyme design. I am
      currently pursuing a dual MD/PhD degree to be able to contribute to
      medical research.	</p>
      <br />
      <hr />
      <br />


      <h2>Experience</h2>
      <br />
      <p>Research Assistant   |   Brigham Young University   |   <em>Sep 2019 - Present</em>  </p>
      <p>Research Internship   |   Forschungszentrum Julich   |   <em>Jun 2021 - Aug 2021</em>  </p>

      <br />
      <br />
      <hr />
      <br />

      <h2>Publications</h2>
      <br />
      <p>See my publications on <a href="https://orcid.org/0000-0001-8522-0309">ORCID</a></p>

    </div>
  </div>
</template>




<script>

export default {
  name: 'BiographyView',
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
