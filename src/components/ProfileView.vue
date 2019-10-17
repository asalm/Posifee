<template>
<div class="container">
    <h4 class="bg-graphic">*</h4>

    <vuescroll>

        <h1 class="title">Profil</h1>
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="subtitle has-text-left">Hallo, {{username}}</h1>
                <div class="notification">
                    <p>
                        Du hast <b> 13 </b> Fragen gestellt und
                        <b> 32 </b> Antworten abgegeben.
                        Du hast für {{series[0]}} von {{total}} Antworten konstruktives Feedback bekommen!
                </p>
                </div>
            </div>
            <div class="column is-6">
                <VueApexCharts type=radialBar height=300 :options="chartOptions" :series="series" />

            </div>
        </div>
    </vuescroll>
</div>
</template>
<script>
//import Question from '../components/Question.vue'
import VueApexCharts from 'vue-apexcharts';
export default {
  name: 'pView',
  components: {
      VueApexCharts,
  },
  props:{
      username: String,
  },
  data: function() {
      return{
      //series: [3,7], //percentbased
      total: '100',
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
      }
    };
  },
  computed:{
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

.column{
  z-index:8;
  max-height:40em !important;
  padding-bottom:6em;
}
.container{
      transition:all 0.8s;
}
</style>