<template>
<div class="container">
    <h1 class="title">Fragen</h1>
    <Question interactive text="thihihi" />
    <Question interactive text="ehm, hallo?! is hirr wea?" />
    <Question interactive text="noch ne frage, weil wegen testen" />
    <Question interactive text="i bims no 1 frage, aber dismal mit viel mehr text, damit ich kann gucken ob das macht ein schnitt oder nischt" />
      <Question interactive text="i bims no 1 frage, aber dismal mit viel mehr text, damit ich kann gucken ob das macht ein schnitt oder nischt" />
    <Question interactive text="i bims no 1 frage, aber dismal mit viel mehr text, damit ich kann gucken ob das macht ein schnitt oder nischt" />
    <Question interactive text="i bims no 1 frage, aber dismal mit viel mehr text, damit ich kann gucken ob das macht ein schnitt oder nischt" />
</div>
</template>
<script>
import Question from '../components/Question.vue'

export default {
  name: 'qView',
  components: {
    Question
  }
}
</script>