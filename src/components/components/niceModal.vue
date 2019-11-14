<template v-if="visible">
    <div class="overlay" id="ovl">
        <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      {{title}}
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content is-medium">
      {{text}}
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item" @click="toggleVisibility()">Schließen</a>
    <a href="#" class="card-footer-item" @click="toggleVisibility()">Mehr Informationen</a>
  </footer>
</div>
        <!--
        <div class="container box">
            <h1 class="title">{{title}}</h1>
             <p>{{text}}</p>
        </div>
       -->
    </div>
</template>

<script>

export default {
    name:'niceModal',
    props:{
        title:String,
        text: String,
        color: String,
        background:String,

    },
    data(){
        return{
            visible:true
        }
    },
    mounted(){
        this.toggleVisibility();

        window.addEventListener('keyup',function(event){
            event.preventDefault();
            if(this.visible && event.keyCode === 27){
                this.toggleVisibility();
            }
        }.bind(this));
    },
    methods: {
        toggleVisibility:function(){
            this.visible = !this.visible;
            var operation = this.visible?'visible':'hidden';
            document.getElementById('ovl').style.visibility = operation;

        }
    },
    
}
</script>

<style>
.overlay{
    top:0;
    left:0;
    position:absolute;
    z-index:488;
    width:100vw;
    height:100vh;
    background-color:rgba(0,0,0,0.5);
}
</style>
<style scoped>
    .box{
        top:8em;

    }
    .card-content{
        min-height:36em;

    }
    .card{
        top:8em;
        max-width:70vw;
        margin-left:auto;
        margin-right:auto;
    }
</style>