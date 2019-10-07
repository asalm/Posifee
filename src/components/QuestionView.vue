<template>
<div class="container">
      <h4 class="bg-graphic">?</h4>
      <vuescroll>

    <div class="column">
            <h1 class="title">Fragen</h1>

    <Question interactive text="thihihi" />
    <Question interactive text="ehm, hallo?! is hirr wea?" />
    <Question interactive text="noch ne frage, weil wegen testen" />
    <Question interactive text="i bims no 1 frage, aber dismal mit viel mehr text, damit ich kann gucken ob das macht ein schnitt oder nischt" />
      <Question interactive text="i bims no 1 frage, aber dismal mit viel mehr text, damit ich kann gucken ob das macht ein schnitt oder nischt" />
    <Question interactive text="i bims no 1 frage, aber dismal mit viel mehr text, damit ich kann gucken ob das macht ein schnitt oder nischt" />
    <Question interactive text="i bims no 1 frage, aber dismal mit viel mehr text, damit ich kann gucken ob das macht ein schnitt oder nischt" />
    <Question interactive text="i bims no 1 frage, aber dismal mit viel mehr text, damit ich kann gucken ob das macht ein schnitt oder nischt" />
    <Question interactive text="i bims no 1 frage, aber dismal mit viel mehr text, damit ich kann gucken ob das macht ein schnitt oder nischt" />
    <Question interactive text="i bims no 1 frage, aber dismal mit viel mehr text, damit ich kann gucken ob das macht ein schnitt oder nischt" />
    <Question interactive text="i bims no 2 frage, aber dismal mit viel mehr text, damit ich kann gucken ob das macht ein schnitt oder nischt" />
    </div>
    
          </vuescroll>



</div>
</template>
<script>
import Question from '../components/Question.vue'
import vuescroll from 'vuescroll';

export default {
  name: 'qView',
  components: {
    Question,
    vuescroll
  }
}
</script>

<style scoped>

.bg-graphic{

  -webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-o-user-select: none;
user-select: none;
  position:absolute;
  overflow:hidden;
  color:hsl(141, 71%, 48%);
  z-index:2;
  opacity:32%;
  font-size:46em;
    transform:translate(285px, -200px);
  /*transform:translateY(-500px);*/

}

.title{
  z-index:4;
  padding-top:4em;
  padding-bottom:2em;
    text-shadow: 0px 2px rgba(0,0,0,0.3);
    font-weight:200;
}
.column{
  z-index:8;
  max-height:40em !important;
  padding-bottom:6em;
}
.container{
      transition:all 0.8s;
}

@media only screen and (max-height:899px){
  .container{
  }
}
</style>