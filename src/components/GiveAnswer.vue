<template>
<div>
    <div class="floating-button">
        <button v-on:click="back">bbb</button>
    </div>
<div class="qContainer">
        <div class="container" style="margin-bottom:3em">
            <h1 class="title">Frage:</h1>
            <div class="notification is-warning">
            <p>{{ question }}</p>
            </div>
        </div>
        <div class="container" style="margin-bottom:2em">
            <h1 class="title">Deine Antwort:</h1>
            <b-field>
            <b-input type="textarea"
                minlength="10"
                maxlength="100"
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
import Question from '@/components/Question'

export default {
    name:'giveanswer',
    props:{
        question:String
    },
    components:{
        Question
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
.qContainer {
    width:30em;
    min-height:40em;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 1em;
    padding: 1em;
    position: absolute;
    top: 20%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -20%);
}
</style>
