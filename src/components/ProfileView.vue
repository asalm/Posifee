<template>
<div class="container">
    <h4 class="bg-graphic">*</h4>

    <vuescroll v-if="!loading">

    <div class="column">
        <div class="level">
            <div class="level-left">
                <h1 class="title">Profil</h1>
            </div>
            <div class="level-right">
                <h1 class="title has-text-right">{{nickname}}</h1>
            </div>
        </div>
        <div class="columns is-centered is-multiline">
            <div class="column is-3" style="max-height:2em">
                <div class="box is-success">
                <h1 class="title">{{pos}}</h1>
                positiv
                </div>
            </div>
            <div class="column is-3" style="max-height:2em">
                <div class="box is-danger">
                <h1 class="title">{{neg}}</h1>
                negativ
                </div>
            </div>
            <div class="column is-3" style="max-height:2em">
                <div class="box is-danger">
                    <h1 class="title">{{total}}</h1>
                    gesamt
                </div>
            </div>
            <!--
            <div class="column is-3" style="max-height:2em">
                <VueApexCharts type=radialBar height=48 :options="chartOptions" :series="series" />
            </div>
            -->
        </div>
        <Answer v-for="a in answers" :key="a.id" :id="$id(a.aid)" :text="a.text" :pos="a.positive" :neg="a.negative" />
        <div class="column is-12">
            <button class="button" @click="toFeedback()">Feedback einreichen...</button>
        </div>
    </div>
    <!--
        Feedback Funktionalität einrichten!
    -->
    </vuescroll>
    <h1 v-else class="title">Läd...</h1>
     <b-loading :is-full-page="true" :active.sync="loading"></b-loading>
    <!-- BUEFY LOADING -->
</div>
</template>
<script>
//import Question from '../components/Question.vue'
//import VueApexCharts from 'vue-apexcharts';
import Answer from '@/components/Answer';
import vuescroll from 'vuescroll';

export default {
  name: 'pView',
  components: {
       Answer, vuescroll //VueApexCharts,
  },
  props:{
      username: String,
  },
  data: function() {
      return{
      answers:[],
      loading: false,
      //series: [3,7], //percentbased
      //total: '100',
      chartOptions: {
          plotOptions:{
              radialBar: {
                  dataLabels: {
                      name: {
                          fontSize: "22px", 
                      },
                      value: {
                          fontSize: '16px',
                      },
                      total: {
                          show: false,
                          label: 'Gesamt',
                          
                        formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b
                    }, 0) / w.globals.series.length + '%'
                  }
                      }
                  }
              }
          },
          labels: ['Gute Antworten','Schlechte Antworten'],
      },
      pos:0,
      neg:0,
      nickname:this.$api.usr.nickname
    };
  },
  computed:{
      total: function(){
          return parseInt(this.answers.length);
      },
      series: function(){
          const seriesarray = new Array();
              var total = 100;
              var good = Math.floor(Math.random() * Math.floor(100))
              var bad = total - good;

        seriesarray.push(good);
        seriesarray.push(bad);
          

          return seriesarray;
      }
  },
  created(){
      this.getAnswers();
  },
  methods: {
      getAnswers: async function(){
            this.loading = true;
            var that = this;
            var _response = await this.$api.db.answer.get({
                "userid":this.$api.usr.id
            },this.$tkn);
            var a = _response.data.reverse();
            var af = a.filter(function(value){
                return (parseInt(value.userid) === parseInt(that.$api.usr.id)) ? true: false
            });
            for(var i = 0; i < af.length; i++){
                if(af[i].positive){
                    this.pos += 1;
                }else if(af[i].negative){
                    this.neg += 1;
                }
                this.answers.push({
                    "aid":af[i].aid,
                    "text":af[i].text,
                    "positive":Boolean(af[i].positive),
                    "negative":Boolean(af[i].negative),
                })
            }
            this.loading = false;
    },
    toFeedback: function(){
        this.$router.push({name:'writefeedback'});
    }

  }
}
</script>
<style scoped>
.notification {
    z-index:4;
}
.notification p{
    text-align:justify;
    hyphens: auto;
}
.bg-graphic{

  -webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-o-user-select: none;
user-select: none;
  position:absolute;
  overflow:hidden;
  color:hsl(0, 0%, 32%);
  z-index:2;
  opacity:0.32;
  filter: alpha(opacity=32);
  zoom:1;
  font-size:46em;
  transform:translate(285px, -200px);
  pointer-events:none;
    /*transform:translateY(-500px);*/

}
@media only screen and (min-width:600px){
.notification{
    box-shadow:0px 6px 8px 1px rgb(228, 228, 228);
    max-width:70%;
    margin:0 auto;
    transition:all 0.8s;
    background-color:white;
}
    .subtitle {
        padding-left:4.5em
    }
}
@media screen and (max-width:599px){
    .notification{
        max-width:92%;
        margin:0 auto;
        transition: all 0.8s;
        background-color:rgb(228, 228, 228);
    }
    .subtitle {
        padding-left:1em
    }
    .bg-graphic{
    transform:translate(205px,-200px);
  }
}

.notification:hover{
    box-shadow:0px 3px 9px 2px rgba(0,0,0,0.3);
    transition: all 0.8s;
}

.box .title{
    margin-top:0em;
    font-family:monospace;
    font-size:24pt;
    font-weight:bolder;
}

.level{
  margin-top:3em;
  padding-left:5em;
  padding-right:5em;
  margin-bottom:2em;
}

.title{
  z-index:4;
    margin-top:3em;
    text-shadow: 0px 2px rgba(0,0,0,0.3);
    font-weight:200;
}

.columns{
    margin-bottom:1em;
}

.column{
  z-index:8;
  max-height:40em !important;
}
.column:nth-last-child(){
      padding-bottom:6em;
}
.container{
      transition:all 0.8s;
}
</style>