<template>
<div class="container">
    <h1 class="title">Antworten</h1>
    <Question interactive hasAnswer text="thihihi" />
    <Question interactive hasAnswer text="ehm, hallo?! is hirr wea?" />
    <Question interactive hasAnswer text="noch ne frage, weil wegen testen" />
    <Question interactive hasAnswer text="i bims no 1 frage, aber dismal mit viel mehr text, damit ich kann gucken ob das macht ein schnitt oder nischt" />
    <Question interactive hasAnswer text="i bims no 1 frage, aber dismal mit viel mehr text, damit ich kann gucken ob das macht ein schnitt oder nischt" />
    <Question interactive hasAnswer text="i bims no 1 frage, aber dismal mit viel mehr text, damit ich kann gucken ob das macht ein schnitt oder nischt" />
    <Question interactive hasAnswer text="i bims no 1 frage, aber dismal mit viel mehr text, damit ich kann gucken ob das macht ein schnitt oder nischt" />
<Question interactive hasAnswer text="thihihi" />
    <Question interactive hasAnswer text="ehm, hallo?! is hirr wea?" />
    <Question interactive hasAnswer text="noch ne frage, weil wegen testen" />
</div>
</template>
<script>
import Question from '../components/Question.vue'

export default {
  name: 'aView',
  components: {
    Question
  }
}
</script>
<style scoped>
@media only screen and (orientation: landscape){
  .container{
    min-width:90%;
}
}

</style>
