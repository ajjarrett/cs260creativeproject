<template>
<div class="home">

  <div class="menu">
    <br />
    <h3>Training Module 1: Scientific Literature</h3>
    <br />
  </div>

  <div class="bodystyle">
    <p>Scientific literature is at the heart of good research.
      To be a successful researcher, you must know what is going on in
      your field of interest. This will help you to find gaps in knowledge
      and plan your own projects.
      When you finish research projects, you will write about your work
      and inform others in the field about the latest findings.
      In this way, scientists are helping other scientists to solve
      problems and move the field forward together.
      </p>

    <p>
    Many new researchers might feel intimidated by academic research
    articles because of the highly technical language. In fact,
    many researchers say that one of the hardest parts of joining a new
    research lab was understanding the language and literature of their
    new lab. Each discipline is almost a foreign language that must be
    learned.</p>

    <p>
    My undergraduate research mentor believed that the best onboarding
    task for new undergraduate students getting involved in research is
    to complete a literature review, which can be written and submitted
    for publication.

    This means going through anywhere between 50-200 research studies
    and trying to summarize the current state of the field on some
    topic.

    This type of a project really forces a student to immerse themselves
    in their field.
    </p>

    <p>
    I would recommend that as you begin reading scientific articles,
    read through them very slowly and thoroughly, trying to understand
    as much as you can. Have a highlighting tool ready to mark things and take notes as
    you read. For terms that are unfamiliar,
    look them up online and maybe watch a few YouTube videos to
    understand the concept at least on a surface-level.
    Then continue reading.
    After several dozen articles, you will begin to notice patterns
    about layout of scientific articles and themes in your chosen
    field of research.

    </p>

    <p>
    Research journals can be accessed through databases, if you are
    at an academic institution, they likely have a portal available
    to access the database that they pay for.
    Common databases include PubMed and others.
    Google Scholar is another nice tool that I like to use.
    If you find Open Access articles, then they are not hidden
    behind a pay wall and anyone can read them without paying anything.
    </p>

  </div>
</div>
</template>







<script>

export default {
  name: 'Module1View',
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
