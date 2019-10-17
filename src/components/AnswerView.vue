<template>
<div class="container">
    <h4 class="bg-graphic">!</h4>
    <vuescroll>
      <div class="column">
      <h1 class="title">Antworten</h1>
        <Question v-for="a in answers" :key="a.id" interactive hasAnswer :text="a.text" class="answer"/>
      </div>
    </vuescroll>
</div>
</template>
<script>
import Question from '../components/Question.vue'
import vuescroll from 'vuescroll';

export default {
  name: 'aView',
  components: {
    Question,
    vuescroll
  },
  data(){
    return {
      answers: [
        {text: "ehm, hallo?! is hirr wea?"},
        {text: "noch ne frage, weil wegen testen"},
                {text: "ehm, hallo?! is hirr wea?"},
        {text: "noch ne frage, weil wegen testen"},
                {text: "ehm, hallo?! is hirr wea?"},
        {text: "noch ne frage, weil wegen testen"},
                {text: "ehm, hallo?! is hirr wea?"},
        {text: "noch ne frage, weil wegen testen"},        {text: "ehm, hallo?! is hirr wea?"},
        {text: "noch ne frage, weil wegen testen"},        {text: "ehm, hallo?! is hirr wea?"},
        {text: "noch ne frage, weil wegen testen"},        {text: "ehm, hallo?! is hirr wea?"},
        {text: "noch ne frage, weil wegen testen"},        {text: "ehm, hallo?! is hirr wea?"},
        {text: "noch ne frage, weil wegen testen"},        {text: "ehm, hallo?! is hirr wea?"},
        {text: "noch ne frage, weil wegen testen"},        {text: "ehm, hallo?! is hirr wea?"},
        {text: "noch ne frage, weil wegen testen"},        {text: "ehm, hallo?! is hirr wea?"},
        {text: "noch ne frage, weil wegen testen"},        {text: "ehm, hallo?! is hirr wea?"},
        {text: "noch ne frage, weil wegen testen"},        {text: "ehm, hallo?! is hirr wea?"},
        {text: "noch ne frage, weil wegen testen"},        {text: "ehm, hallo?! is hirr wea?"},
        {text: "noch ne frage, weil wegen testen"},        {text: "ehm, hallo?! is hirr wea?"},
        {text: "noch ne frage, weil wegen testen"},
        {text: "i bims no 1 frage, aber dismal mit viel mehr text, damit ich kann gucken ob das macht ein schnitt oder nischt"}

      ]
    }
  }
}
</script>
<style scoped>

.answer{
  z-index: 30;
}

.bg-graphic{

  -webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-o-user-select: none;
user-select: none;
  position:absolute;
  overflow:hidden;
  color:hsl(7, 71%, 48%);
  z-index:2;
  opacity:32%;
  font-size:46em;
  transform:translate(385px, -200px);
  pointer-events:none;
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

/*
@media only screen and (orientation: landscape){
  .container{
    min-width:90%;
}
}
*/
</style>
