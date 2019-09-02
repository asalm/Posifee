<template>
<div class="container">
    <h1 class="title">Profile</h1>
    <div class="columns">
        <div class="column">
            <h1 class="subtitle">Hallo, {{username}}</h1>
            <br>

            <h2 class="subtitle">Rangliste</h2>
        </div>
        <div class="column">
            <h1 class="subtitle">Bewertung deiner Antworten</h1>
            <VueApexCharts type=radialBar height=300 :options="chartOptions" :series="series" />
            <p>
                Du hast für {{series[0]}} von {{total}} Fragen konstruktives Feedback gegeben!
            </p>        
        </div>
    </div>
    <br><br><br>
    
    
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
      username: Text,
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