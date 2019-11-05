<template>
<div class="container">
    <h4 class="bg-graphic">!</h4>
    <vuescroll v-if="!loading">
      <div class="column">
      <h1 class="title">Antworten</h1>
        <Question v-for="a in answers" :key="a.id" :id="a.qid" interactive :count="a.count" hasAnswer :text="a.text" class="answer"/>
      </div>
    </vuescroll>
    <h1 v-else class="title">Läd...</h1>
       <b-loading :is-full-page="true" :active.sync="loading"></b-loading>

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
      answers: [],
      loading: false
    }
  },
  created(){
    this.getQuestions();
  },
  methods: {
    getQuestions: async function(){
      this.loading = true;
      var _response = await this.$api.db.question.get({
        "userid": parseInt(this.$api.usr.id)
      },this.$tkn);
      var q = _response.data;
      for(var i = 0; i < q.length; i++){
        //console.log("checking ", q[i].qid);
        var _response2 = await this.$api.db.answer.get({
          "qid":q[i].qid
        },this.$tkn);
        //console.log("answers for "+q[i].qid,_response2);
        var awsCount = _response2.data.length;
        this.answers.push({
          "text":q[i].text.toString(),
          "count":awsCount,
          "qid":q[i].qid,

        });
      }
      this.loading = false;

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
  opacity:0.32;
  filter: alpha(opacity=32);
  zoom:1;
  font-size:46em;
  transform:translate(385px, -200px);
  pointer-events:none;
    /*transform:translateY(-500px);*/

}
@media screen and (max-width:599px){
  .bg-graphic{
    transform:translate(235px,-200px);
  }
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
html{
  overflow:hidden;
}
/*
@media only screen and (orientation: landscape){
  .container{
    min-width:90%;
}
}
*/
</style>
