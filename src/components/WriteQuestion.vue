<template>
<div>
    <div class="floating-button">
        <b-button v-on:click="back">
            <font-awesome-icon icon="arrow-left"/>
        </b-button> 
    </div>
<div class="qContainer">
        <div class="container" style="margin-bottom:3em">
            <h1 class="title">Frag etwas!</h1>
            <p>Stell eine Frage an die Community! Nur du kannst die Antworten dieser Frage lesen.</p>
        </div>
        <div class="container" style="margin-bottom:2em">
            <h1 class="title">Deine Frage:</h1>
            <b-field>
            <b-input type="textarea"
                minlength="10"
                maxlength="500"
                placeholder="Maxlength automatically counts characters">
            </b-input>
            </b-field>
        </div>
        <div class="container">
            <b-button>Abschicken</b-button>
        </div>
</div>
</div>
</template>
<script>

export default {
    name:'writequestion',
    props:{
        question:String
    },
    methods:{
        back: function(){
            const self = this

            self.$router.go(-1);
        }
    }
}
</script>
<style scoped>
.floating-button{
    position:fixed;
    z-index:9999;
    top:5%;
    left:5%;
}

@media only screen and (min-width:1200px){
    .qContainer{
        width:30em;
    }
}
.qContainer {
    /*width:30em;*/
    height:40em;
    padding: 1em;
    top: 20%;
    left: 50%;
    margin-right: auto;
    margin-left: auto;
}
.title{
  z-index:4;
  padding-top:0.56em;
    text-shadow: 0px 2px rgba(0,0,0,0.3);
    font-weight:200;
    
}
</style>
