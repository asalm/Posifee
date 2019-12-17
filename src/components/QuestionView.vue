<template>
  <div class="container">
    <h4 class="bg-graphic">?</h4>
    <vuescroll v-if="!loading">
      <div class="column">
        <devNote v-on:no-scroll="noscroll" v-if="!devNoteRead"></devNote>
      </div>
      <div class="column" id="timeline">
        <div class="level">
          <div class="level-left">
              <h1 class="title">Fragen</h1>
          </div>
          <div class="level-right">
              <button class="button" @click="interaction">Frage verfassen!</button>
          </div>
        </div>
        <div v-if="firstUse" class="notification question is-warning">
          Um Posifee im vollen Umfang zu nutzen, stelle am besten Direkt deine erste Frage! Nur so kannst du die Antworten anderer Mitglieder bewerten.  
        </div>
        <div v-if="!firstUse">
        <Question v-for="q in questions" :key="q.id" interactive :id="q.qid" :text="q.text" class="question"/>

        </div>
      </div>
    </vuescroll>
    <h1 v-else class="title">Läd...</h1>
      <b-loading :is-full-page="true" :active.sync="loading"></b-loading>
    </div>
</template>

<script>
import Question from '../components/Question.vue'
import vuescroll from 'vuescroll';
import devNote from '../components/components/DevNote.vue';

export default {
  name: 'qView',
  components: {
    Question,
    vuescroll,
    devNote
  },
  created(){
    //this.checkUserStatus();
    this.getQuestions();
  },
  mounted(){
    this.checkUserStatus();
  },
  data(){
    return {
      questions:[],
      loading: false,
      firstUse: false,
      noscroll_var: false,
      devNoteRead: false,
    }
  },
  methods: {
    interaction: function(){
      event.preventDefault();

      this.$router.push({name:'writequestion'});
    },
    checkUserStatus: async function(){
      if(window._devNote){
        this.devNoteRead = true;
      }
      var _response = await this.$api.db.question.get({
        "userid": parseInt(this.$api.usr.id)
      },this.$tkn);
      var q = _response.data;
      // eslint-disable-next-line no-console
      console.log("q",q.length);
      if (q.length > 0){
        this.firstUse = false;
      }else{
        this.firstUse = true;
      }
    },
    getQuestions: async function(){
      var that = this;
      this.loading = true;
      var _response =  await this.$api.db.question.get({}, this.$tkn);
      var q = _response.data.reverse();
      var qf = q.filter(function(value){
          return (parseInt(value.userid) === parseInt(that.$api.usr.id)) ? false: true
        
      });
      for(var i = 0; i < qf.length; i++){
        this.questions.push({
          "text":qf[i].text.toString(),
          "qid":parseInt(qf[i].qid),
          "userID":parseInt(qf[i].userID)
        });
      }
      this.loading = false;
    },
    noscroll: function(){
      //console.log("noscroll triggered");
      if(this.noscroll_var){
                document.getElementById("timeline").setAttribute('style','overflowY = visible !important');
                this.noscroll_var = false
            }else{
                document.getElementById("timeline").setAttribute('style', 'overflow-y: hidden !important');
                this.noscroll_var = true
            }
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
/*
@media only screen and (max-height:899px){
  .container{
  }
}
*/
</style>