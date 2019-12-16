<template>
<div class="container">
    <h4 class="bg-graphic">!</h4>
    <vuescroll v-if="!loading">
      <div class="column">
      <h1 class="title">Optionen</h1>
        <p>Coming Soon</p>
      </div>
    </vuescroll>
    <h1 v-else class="title">Läd...</h1>
       <b-loading :is-full-page="true" :active.sync="loading"></b-loading>

</div>
</template>
<script>
export default {
    name:'OptionsView',
    data: function(){
        return{
            loading: false,
        }
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
</style>