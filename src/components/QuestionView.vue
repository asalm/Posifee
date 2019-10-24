<template>
  <div class="container">
    <h4 class="bg-graphic">?</h4>
    <vuescroll v-if="!loading">
      <div class="column">
        <div class="level">
          <div class="level-left">
              <h1 class="title">Fragen</h1>
          </div>
          <div class="level-right">
              <button class="button" @click="interaction">Frage verfassen!</button>
          </div>
        </div>
        <Question v-for="q in questions" :key="q.id" interactive :id="q.qid" :text="q.text" class="question"/>
      </div>
    </vuescroll>
    <h1 v-else class="title">Läd...</h1>
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
  },
  created(){
    this.getQuestions();
  },
  data(){
    return {
      questions:[],
      loading: false
    }
  },
  methods: {
    interaction: function(){
      event.preventDefault();

      this.$router.push({name:'writequestion'});
    },
    
    getQuestions: async function(){
//array.filter.where(userID = api.usr.id);
      var that = this;
      this.loading = true;
      var _response =  await this.$api.db.question.get({}, this.$tkn);
      var q = _response.data.reverse();
      var qf = q.filter(function(value){
        console.log(value);
        console.log(value.userID,that.$api.usr.id);
        if(value.userID != that.$api.usr.id){
          return value.userID != that.$api.usr.id;

        }
      })
      for(var i = 0; i < qf.length; i++){
        this.questions.push({
          "text":qf[i].text.toString(),
          "qid":parseInt(qf[i].qid),
          "userID":parseInt(qf[i].userID)
        });
      }
      this.loading = false;
    }
  }
}
</script>

<style scoped>

.question{
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
  color:hsl(141, 71%, 48%);
  z-index:2;
  opacity:0.32;
  filter: alpha(opacity=32);
  zoom:1;
  font-size:46em;
  transform:translate(285px, -200px);
  pointer-events:none;
    /*transform:translateY(-500px);*/

}
@media screen and (max-width:599px){
  .bg-graphic{
    transform:translate(200px,-200px);
  }
}
.level{
  margin-top:3em;
  padding-left:5em;
  padding-right:5em;
  margin-bottom:2em;
}

.title{
  z-index:4;

    text-shadow: 0px 2px rgba(0,0,0,0.3);
    font-weight:200;
}

.button{
  z-index:4;
  border-color:hsl(141, 71%, 48%);
}

.button:hover{
  z-index:4;
  background-color:hsl(141,71,48%);
  border-color:rgba(0,0,0,0.3);
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